#!/usr/bin/env node

/**
 * 运行所有demo示例的脚本
 */

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 运行所有序列化/反序列化示例\n');

const examples = [
    {
        name: '基本序列化示例',
        file: 'basic_serialization.js',
        description: '展示最基本的序列化和反序列化操作'
    },
    {
        name: '复杂嵌套消息示例',
        file: 'complex_wrapper.js', 
        description: '展示处理复杂嵌套protobuf消息'
    },
    {
        name: 'WebSocket模拟示例',
        file: 'websocket_simulation.js',
        description: '模拟真实WebSocket数据处理场景'
    },
    {
        name: '性能测试示例',
        file: 'performance_test.js',
        description: '对比protobuf vs JSON的性能差异'
    }
];

function runExample(example, index) {
    return new Promise((resolve, reject) => {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`📋 ${index + 1}/${examples.length}: ${example.name}`);
        console.log(`💡 ${example.description}`);
        console.log(`📂 文件: ${example.file}`);
        console.log(`${'='.repeat(60)}\n`);
        
        const child = spawn('node', [path.join(__dirname, example.file)], {
            stdio: 'inherit'
        });
        
        child.on('close', (code) => {
            if (code === 0) {
                console.log(`\n✅ ${example.name} 完成`);
                resolve();
            } else {
                console.log(`\n❌ ${example.name} 失败 (退出码: ${code})`);
                reject(new Error(`Example ${example.name} failed with code ${code}`));
            }
        });
        
        child.on('error', (error) => {
            console.error(`\n❌ 运行 ${example.name} 时出错:`, error);
            reject(error);
        });
    });
}

async function runAllExamples() {
    console.log('📚 可用的序列化/反序列化示例:');
    examples.forEach((example, index) => {
        console.log(`  ${index + 1}. ${example.name}`);
        console.log(`     ${example.description}`);
    });
    
    console.log(`\n🏃‍♂️ 开始运行 ${examples.length} 个示例...\n`);
    
    try {
        for (let i = 0; i < examples.length; i++) {
            await runExample(examples[i], i);
            
            // 在示例之间暂停一下，除了最后一个
            if (i < examples.length - 1) {
                console.log('\n⏳ 等待 2 秒后继续...');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
        
        console.log(`\n\n🎉 所有示例运行完成！`);
        console.log('\n📋 总结:');
        console.log('  ✅ 基本序列化/反序列化');
        console.log('  ✅ 复杂嵌套消息处理');
        console.log('  ✅ 实际应用场景模拟');
        console.log('  ✅ 性能对比测试');
        
        console.log('\n💡 下一步:');
        console.log('  - 查看各个示例源码了解实现细节');
        console.log('  - 在你的项目中应用这些模式');
        console.log('  - 根据性能测试结果选择最适合的方案');
        
    } catch (error) {
        console.error('\n❌ 运行示例时出错:', error.message);
        process.exit(1);
    }
}

// 检查是否要运行特定示例
const args = process.argv.slice(2);
if (args.length > 0) {
    const exampleNumber = parseInt(args[0]);
    if (exampleNumber >= 1 && exampleNumber <= examples.length) {
        console.log(`🎯 运行指定示例: ${examples[exampleNumber - 1].name}\n`);
        runExample(examples[exampleNumber - 1], exampleNumber - 1)
            .then(() => console.log('\n✅ 示例运行完成！'))
            .catch(error => {
                console.error('\n❌ 示例运行失败:', error.message);
                process.exit(1);
            });
    } else {
        console.error(`❌ 无效的示例编号: ${exampleNumber}`);
        console.error(`   请使用 1-${examples.length} 之间的数字`);
        process.exit(1);
    }
} else {
    // 运行所有示例
    runAllExamples().catch(console.error);
} 