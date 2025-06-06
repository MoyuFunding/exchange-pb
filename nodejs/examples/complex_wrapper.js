#!/usr/bin/env node

/**
 * 复杂嵌套消息序列化示例
 * 展示如何处理包含嵌套消息的PushDataV3ApiWrapper
 */

const { mexc } = require('../lib/index.js');

console.log('🚀 复杂嵌套消息序列化示例\n');

// 1. 创建嵌套的复杂消息
console.log('1️⃣ 创建PushDataV3ApiWrapper消息');

// 创建BookTicker子消息
const bookTicker = new mexc.PublicBookTickerV3Api({
    bidPrice: "45000.75",
    bidQuantity: "3.2",
    askPrice: "45001.25",
    askQuantity: "2.8"
});

// 创建包装器消息
const wrapper = new mexc.PushDataV3ApiWrapper({
    channel: "spot@public.bookTicker.v3.api",
    symbol: "BTCUSDT",
    symbolId: "BTC_USDT", 
    createTime: Date.now(),
    sendTime: Date.now() + 100,
    publicBookTicker: bookTicker
});

console.log('原始嵌套数据:');
console.log(`  频道: ${wrapper.channel}`);
console.log(`  交易对: ${wrapper.symbol}`);
console.log(`  创建时间: ${new Date(Number(wrapper.createTime)).toISOString()}`);
console.log(`  嵌套BookTicker:`);
console.log(`    买价: ${wrapper.publicBookTicker.bidPrice} @ ${wrapper.publicBookTicker.bidQuantity}`);
console.log(`    卖价: ${wrapper.publicBookTicker.askPrice} @ ${wrapper.publicBookTicker.askQuantity}\n`);

// 2. 序列化复杂消息
console.log('2️⃣ 序列化复杂消息');
const buffer = mexc.PushDataV3ApiWrapper.encode(wrapper).finish();
console.log(`  序列化后大小: ${buffer.length} bytes`);
console.log(`  压缩效率: ${((JSON.stringify(mexc.PushDataV3ApiWrapper.toObject(wrapper)).length - buffer.length) / JSON.stringify(mexc.PushDataV3ApiWrapper.toObject(wrapper)).length * 100).toFixed(1)}% 节省空间\n`);

// 3. 反序列化复杂消息
console.log('3️⃣ 反序列化复杂消息');
const decoded = mexc.PushDataV3ApiWrapper.decode(buffer);

console.log('反序列化后的数据:');
console.log(`  频道: ${decoded.channel}`);
console.log(`  交易对: ${decoded.symbol}`);
console.log(`  创建时间: ${new Date(Number(decoded.createTime)).toISOString()}`);

// 4. 检查嵌套消息
console.log('\n4️⃣ 检查嵌套消息');
if (decoded.publicBookTicker) {
    console.log('  ✅ 包含BookTicker数据:');
    console.log(`    买价: ${decoded.publicBookTicker.bidPrice} @ ${decoded.publicBookTicker.bidQuantity}`);
    console.log(`    卖价: ${decoded.publicBookTicker.askPrice} @ ${decoded.publicBookTicker.askQuantity}`);
} else {
    console.log('  ❌ 没有BookTicker数据');
}

// 5. 模拟不同类型的消息
console.log('\n5️⃣ 创建不同类型的Wrapper消息');

// 创建MiniTicker消息
const miniTicker = new mexc.PublicMiniTickerV3Api({
    openPrice: "44000.00",
    highPrice: "46000.00",
    lowPrice: "43500.00",
    lastPrice: "45500.00",
    volume: "1234.56",
    quoteVolume: "55676789.12",
    openTime: Date.now() - 86400000, // 24小时前
    closeTime: Date.now(),
    count: 25680
});

const miniWrapper = new mexc.PushDataV3ApiWrapper({
    channel: "spot@public.miniTicker.v3.api",
    symbol: "ETHUSDT",
    symbolId: "ETH_USDT",
    createTime: Date.now(),
    sendTime: Date.now(),
    publicMiniTicker: miniTicker
});

// 序列化和反序列化MiniTicker
const miniBuffer = mexc.PushDataV3ApiWrapper.encode(miniWrapper).finish();
const decodedMini = mexc.PushDataV3ApiWrapper.decode(miniBuffer);

console.log('MiniTicker消息:');
console.log(`  交易对: ${decodedMini.symbol}`);
if (decodedMini.publicMiniTicker) {
    console.log(`  开盘价: ${decodedMini.publicMiniTicker.openPrice}`);
    console.log(`  最新价: ${decodedMini.publicMiniTicker.lastPrice}`);
    console.log(`  24h成交量: ${decodedMini.publicMiniTicker.volume}`);
}

// 6. 转换为JSON进行对比
console.log('\n6️⃣ JSON格式对比');
const bookTickerJson = mexc.PushDataV3ApiWrapper.toObject(decoded);
const miniTickerJson = mexc.PushDataV3ApiWrapper.toObject(decodedMini);

console.log('\nBookTicker JSON:');
console.log(JSON.stringify(bookTickerJson, null, 2));

console.log('\nMiniTicker JSON:');
console.log(JSON.stringify(miniTickerJson, null, 2));

console.log('\n✅ 复杂嵌套消息示例完成！'); 