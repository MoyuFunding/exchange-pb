#!/usr/bin/env node

/**
 * Protobuf性能测试示例
 * 对比protobuf vs JSON的性能差异
 */

const { mexc } = require('../lib/index.js');

console.log('🚀 Protobuf性能测试\n');

// 性能测试工具类
class PerformanceTester {
    constructor() {
        this.results = {};
    }

    // 创建测试数据
    createTestData(count = 1000) {
        const data = [];
        
        for (let i = 0; i < count; i++) {
            const wrapper = new mexc.PushDataV3ApiWrapper({
                channel: "spot@public.bookTicker.v3.api",
                symbol: `TEST${i}USDT`,
                symbolId: `TEST${i}_USDT`,
                createTime: Date.now() + i,
                sendTime: Date.now() + i + 100,
                publicBookTicker: new mexc.PublicBookTickerV3Api({
                    bidPrice: (45000 + Math.random() * 1000).toFixed(2),
                    bidQuantity: (Math.random() * 10).toFixed(3),
                    askPrice: (45001 + Math.random() * 1000).toFixed(2),
                    askQuantity: (Math.random() * 10).toFixed(3)
                })
            });
            
            data.push(wrapper);
        }
        
        return data;
    }

    // 测试序列化性能
    testSerialization(data, label) {
        console.log(`\n🔧 测试${label}序列化...`);
        
        const startTime = process.hrtime.bigint();
        const startMem = process.memoryUsage();
        
        let totalSize = 0;
        const serialized = [];
        
        if (label === 'Protobuf') {
            // Protobuf序列化
            for (const item of data) {
                const buffer = mexc.PushDataV3ApiWrapper.encode(item).finish();
                serialized.push(buffer);
                totalSize += buffer.length;
            }
        } else {
            // JSON序列化
            for (const item of data) {
                const json = JSON.stringify(mexc.PushDataV3ApiWrapper.toObject(item));
                serialized.push(json);
                totalSize += Buffer.byteLength(json, 'utf8');
            }
        }
        
        const endTime = process.hrtime.bigint();
        const endMem = process.memoryUsage();
        
        const timeMs = Number(endTime - startTime) / 1000000;
        const memoryUsed = endMem.heapUsed - startMem.heapUsed;
        
        const result = {
            count: data.length,
            timeMs: timeMs.toFixed(2),
            totalSize: totalSize,
            avgSize: (totalSize / data.length).toFixed(1),
            throughput: (data.length / timeMs * 1000).toFixed(0),
            memoryUsed: (memoryUsed / 1024 / 1024).toFixed(2)
        };
        
        console.log(`   消息数量: ${result.count}`);
        console.log(`   总耗时: ${result.timeMs}ms`);
        console.log(`   总大小: ${totalSize} bytes (${(totalSize/1024).toFixed(1)} KB)`);
        console.log(`   平均大小: ${result.avgSize} bytes/message`);
        console.log(`   吞吐量: ${result.throughput} msg/sec`);
        console.log(`   内存使用: ${result.memoryUsed} MB`);
        
        this.results[`serialize_${label.toLowerCase()}`] = result;
        return serialized;
    }

    // 测试反序列化性能
    testDeserialization(serializedData, label) {
        console.log(`\n🔧 测试${label}反序列化...`);
        
        const startTime = process.hrtime.bigint();
        const startMem = process.memoryUsage();
        
        const deserialized = [];
        
        if (label === 'Protobuf') {
            // Protobuf反序列化
            for (const buffer of serializedData) {
                const wrapper = mexc.PushDataV3ApiWrapper.decode(buffer);
                deserialized.push(wrapper);
            }
        } else {
            // JSON反序列化
            for (const json of serializedData) {
                const obj = JSON.parse(json);
                const wrapper = mexc.PushDataV3ApiWrapper.fromObject(obj);
                deserialized.push(wrapper);
            }
        }
        
        const endTime = process.hrtime.bigint();
        const endMem = process.memoryUsage();
        
        const timeMs = Number(endTime - startTime) / 1000000;
        const memoryUsed = endMem.heapUsed - startMem.heapUsed;
        
        const result = {
            count: serializedData.length,
            timeMs: timeMs.toFixed(2),
            throughput: (serializedData.length / timeMs * 1000).toFixed(0),
            memoryUsed: (memoryUsed / 1024 / 1024).toFixed(2)
        };
        
        console.log(`   消息数量: ${result.count}`);
        console.log(`   总耗时: ${result.timeMs}ms`);
        console.log(`   吞吐量: ${result.throughput} msg/sec`);
        console.log(`   内存使用: ${result.memoryUsed} MB`);
        
        this.results[`deserialize_${label.toLowerCase()}`] = result;
        return deserialized;
    }

    // 对比结果
    compareResults() {
        console.log('\n📊 性能对比结果:');
        console.log('=' .repeat(60));
        
        const protobuf = this.results.serialize_protobuf;
        const json = this.results.serialize_json;
        
        if (protobuf && json) {
            console.log('\n🔥 序列化对比:');
            console.log(`   Protobuf vs JSON 大小: ${protobuf.totalSize} vs ${json.totalSize} bytes`);
            console.log(`   大小优势: Protobuf 节省 ${((json.totalSize - protobuf.totalSize) / json.totalSize * 100).toFixed(1)}%`);
            console.log(`   Protobuf vs JSON 速度: ${protobuf.timeMs}ms vs ${json.timeMs}ms`);
            console.log(`   速度优势: ${protobuf.timeMs < json.timeMs ? 'Protobuf' : 'JSON'} 快 ${Math.abs((protobuf.timeMs - json.timeMs) / Math.max(protobuf.timeMs, json.timeMs) * 100).toFixed(1)}%`);
        }
        
        const protobufDeser = this.results.deserialize_protobuf;
        const jsonDeser = this.results.deserialize_json;
        
        if (protobufDeser && jsonDeser) {
            console.log('\n🔥 反序列化对比:');
            console.log(`   Protobuf vs JSON 速度: ${protobufDeser.timeMs}ms vs ${jsonDeser.timeMs}ms`);
            console.log(`   速度优势: ${protobufDeser.timeMs < jsonDeser.timeMs ? 'Protobuf' : 'JSON'} 快 ${Math.abs((protobufDeser.timeMs - jsonDeser.timeMs) / Math.max(protobufDeser.timeMs, jsonDeser.timeMs) * 100).toFixed(1)}%`);
        }
    }

    // 测试数据完整性
    testDataIntegrity(original, protobufResult, jsonResult) {
        console.log('\n🔍 数据完整性检查...');
        
        let protobufMatches = 0;
        let jsonMatches = 0;
        
        for (let i = 0; i < original.length && i < 10; i++) { // 只检查前10个
            const orig = mexc.PushDataV3ApiWrapper.toObject(original[i]);
            const protobuf = mexc.PushDataV3ApiWrapper.toObject(protobufResult[i]);
            const json = mexc.PushDataV3ApiWrapper.toObject(jsonResult[i]);
            
            if (JSON.stringify(orig) === JSON.stringify(protobuf)) {
                protobufMatches++;
            }
            if (JSON.stringify(orig) === JSON.stringify(json)) {
                jsonMatches++;
            }
        }
        
        console.log(`   Protobuf数据一致性: ${protobufMatches}/10 ✅`);
        console.log(`   JSON数据一致性: ${jsonMatches}/10 ✅`);
    }
}

// 运行性能测试
async function runPerformanceTest() {
    const tester = new PerformanceTester();
    
    // 创建测试数据
    console.log('📝 准备测试数据...');
    const testData = tester.createTestData(5000); // 5000条消息
    console.log(`   生成 ${testData.length} 条测试消息`);
    
    // 序列化性能测试
    const protobufSerialized = tester.testSerialization(testData, 'Protobuf');
    const jsonSerialized = tester.testSerialization(testData, 'JSON');
    
    // 反序列化性能测试
    const protobufDeserialized = tester.testDeserialization(protobufSerialized, 'Protobuf');
    const jsonDeserialized = tester.testDeserialization(jsonSerialized, 'JSON');
    
    // 数据完整性检查
    tester.testDataIntegrity(testData, protobufDeserialized, jsonDeserialized);
    
    // 对比结果
    tester.compareResults();
    
    console.log('\n✅ 性能测试完成！');
    console.log('\n💡 结论:');
    console.log('   - Protobuf在数据大小上通常有显著优势');
    console.log('   - Protobuf在序列化/反序列化速度上可能更快');
    console.log('   - 选择哪种格式取决于你的具体需求');
}

// 执行测试
runPerformanceTest().catch(console.error); 