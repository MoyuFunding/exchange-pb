#!/usr/bin/env node

/**
 * 模拟WebSocket实时数据处理示例
 * 展示在实际应用中如何处理protobuf二进制数据
 */

const { mexc } = require('../lib/index.js');

console.log('🚀 模拟WebSocket实时数据处理\n');

// 模拟数据生成器
class MarketDataGenerator {
    constructor() {
        this.lastPrice = 45000;
        this.sequence = 1;
    }

    // 生成随机价格变动
    generateBookTicker(symbol) {
        const change = (Math.random() - 0.5) * 100; // -50 to +50
        this.lastPrice += change;
        
        const spread = Math.random() * 2 + 0.5; // 0.5 to 2.5 spread
        const bidPrice = this.lastPrice - spread / 2;
        const askPrice = this.lastPrice + spread / 2;
        
        return new mexc.PushDataV3ApiWrapper({
            channel: "spot@public.bookTicker.v3.api",
            symbol: symbol,
            symbolId: symbol.replace('/', '_'),
            createTime: Date.now(),
            sendTime: Date.now(),
            publicBookTicker: new mexc.PublicBookTickerV3Api({
                bidPrice: bidPrice.toFixed(2),
                bidQuantity: (Math.random() * 10 + 1).toFixed(3),
                askPrice: askPrice.toFixed(2),
                askQuantity: (Math.random() * 10 + 1).toFixed(3)
            })
        });
    }

    // 生成K线数据
    generateKline(symbol) {
        const open = this.lastPrice;
        const close = open + (Math.random() - 0.5) * 200;
        const high = Math.max(open, close) + Math.random() * 50;
        const low = Math.min(open, close) - Math.random() * 50;
        
        return new mexc.PushDataV3ApiWrapper({
            channel: "spot@public.kline.v3.api",
            symbol: symbol,
            symbolId: symbol.replace('/', '_'),
            createTime: Date.now(),
            sendTime: Date.now(),
            publicSpotKline: new mexc.PublicSpotKlineV3Api({
                openPrice: open.toFixed(2),
                closePrice: close.toFixed(2),
                highPrice: high.toFixed(2),
                lowPrice: low.toFixed(2),
                volume: (Math.random() * 1000).toFixed(4),
                openTime: Date.now() - 60000, // 1分钟前
                closeTime: Date.now()
            })
        });
    }
}

// 模拟WebSocket客户端
class MockWebSocketClient {
    constructor() {
        this.generator = new MarketDataGenerator();
        this.messageCount = 0;
        this.totalBytes = 0;
    }

    // 模拟发送数据（实际中这是接收）
    simulateSendData(messageType, symbol) {
        let wrapper;
        
        switch (messageType) {
            case 'bookTicker':
                wrapper = this.generator.generateBookTicker(symbol);
                break;
            case 'kline':
                wrapper = this.generator.generateKline(symbol);
                break;
            default:
                throw new Error('Unknown message type');
        }

        // 序列化为二进制数据
        const buffer = mexc.PushDataV3ApiWrapper.encode(wrapper).finish();
        
        console.log(`📤 发送${messageType}数据 (${buffer.length} bytes)`);
        
        // 模拟网络传输后接收数据
        this.simulateReceiveData(buffer);
        
        return buffer;
    }

    // 模拟接收和处理数据
    simulateReceiveData(buffer) {
        try {
            this.messageCount++;
            this.totalBytes += buffer.length;
            
            console.log(`📥 接收到数据 #${this.messageCount}`);
            
            // 反序列化
            const wrapper = mexc.PushDataV3ApiWrapper.decode(buffer);
            
            // 根据频道类型处理不同数据
            this.processMessage(wrapper);
            
        } catch (error) {
            console.error('❌ 处理消息失败:', error.message);
        }
    }

    // 处理不同类型的消息
    processMessage(wrapper) {
        console.log(`   频道: ${wrapper.channel}`);
        console.log(`   交易对: ${wrapper.symbol}`);
        console.log(`   延迟: ${Date.now() - wrapper.createTime}ms`);
        
        if (wrapper.publicBookTicker) {
            this.processBookTicker(wrapper.publicBookTicker, wrapper.symbol);
        } else if (wrapper.publicSpotKline) {
            this.processKline(wrapper.publicSpotKline, wrapper.symbol);
        } else {
            console.log('   ⚠️ 未知消息类型');
        }
        
        console.log(''); // 空行分隔
    }

    // 处理BookTicker数据
    processBookTicker(bookTicker, symbol) {
        console.log(`   📊 ${symbol} 最佳价格:`);
        console.log(`      买一: ${bookTicker.bidPrice} @ ${bookTicker.bidQuantity}`);
        console.log(`      卖一: ${bookTicker.askPrice} @ ${bookTicker.askQuantity}`);
        
        const spread = parseFloat(bookTicker.askPrice) - parseFloat(bookTicker.bidPrice);
        console.log(`      价差: ${spread.toFixed(2)}`);
        
        // 存储到数据库或缓存（这里只是模拟）
        this.saveToDatabase('book_ticker', {
            symbol: symbol,
            bid: bookTicker.bidPrice,
            ask: bookTicker.askPrice,
            timestamp: Date.now()
        });
    }

    // 处理K线数据
    processKline(kline, symbol) {
        console.log(`   📈 ${symbol} K线数据:`);
        console.log(`      开盘: ${kline.openPrice}`);
        console.log(`      收盘: ${kline.closePrice}`);
        console.log(`      最高: ${kline.highPrice}`);
        console.log(`      最低: ${kline.lowPrice}`);
        console.log(`      成交量: ${kline.volume}`);
        
        const change = parseFloat(kline.closePrice) - parseFloat(kline.openPrice);
        const changePercent = (change / parseFloat(kline.openPrice) * 100).toFixed(2);
        console.log(`      涨跌: ${change > 0 ? '+' : ''}${change.toFixed(2)} (${changePercent}%)`);
        
        // 存储K线数据
        this.saveToDatabase('kline', {
            symbol: symbol,
            open: kline.openPrice,
            close: kline.closePrice,
            high: kline.highPrice,
            low: kline.lowPrice,
            volume: kline.volume,
            timestamp: Date.now()
        });
    }

    // 模拟存储到数据库
    saveToDatabase(table, data) {
        // 在实际应用中，这里会保存到Redis、MongoDB等
        console.log(`   💾 保存到 ${table} 表: ${Object.keys(data).length} 字段`);
    }

    // 获取统计信息
    getStats() {
        return {
            messageCount: this.messageCount,
            totalBytes: this.totalBytes,
            avgBytesPerMessage: this.messageCount > 0 ? (this.totalBytes / this.messageCount).toFixed(1) : 0
        };
    }
}

// 运行演示
async function runDemo() {
    const client = new MockWebSocketClient();
    
    console.log('开始模拟WebSocket数据流...\n');
    
    // 模拟接收不同类型的数据
    const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
    const messageTypes = ['bookTicker', 'kline'];
    
    for (let i = 0; i < 8; i++) {
        const symbol = symbols[i % symbols.length];
        const messageType = messageTypes[i % messageTypes.length];
        
        client.simulateSendData(messageType, symbol);
        
        // 模拟间隔
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // 显示统计信息
    const stats = client.getStats();
    console.log('📊 统计信息:');
    console.log(`   处理消息数: ${stats.messageCount}`);
    console.log(`   总字节数: ${stats.totalBytes}`);
    console.log(`   平均消息大小: ${stats.avgBytesPerMessage} bytes`);
    
    console.log('\n✅ WebSocket模拟演示完成！');
}

// 执行演示
runDemo().catch(console.error); 