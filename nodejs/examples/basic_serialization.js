#!/usr/bin/env node

/**
 * 基本序列化和反序列化示例
 * 展示如何创建protobuf消息、序列化为二进制、再反序列化回来
 */

const { mexc } = require('../lib/index.js');

console.log('🚀 基本序列化/反序列化示例\n');

// 1. 创建一个BookTicker消息
console.log('1️⃣ 创建BookTicker消息');
const bookTicker = new mexc.PublicBookTickerV3Api({
    bidPrice: "50000.50",
    bidQuantity: "2.5",
    askPrice: "50001.00", 
    askQuantity: "1.8"
});

console.log('原始数据:');
console.log(`  买价: ${bookTicker.bidPrice} @ ${bookTicker.bidQuantity}`);
console.log(`  卖价: ${bookTicker.askPrice} @ ${bookTicker.askQuantity}\n`);

// 2. 序列化为二进制
console.log('2️⃣ 序列化为二进制');
const buffer = mexc.PublicBookTickerV3Api.encode(bookTicker).finish();
console.log(`  二进制大小: ${buffer.length} bytes`);
console.log(`  二进制数据: ${Array.from(buffer.slice(0, 20)).map(b => b.toString(16).padStart(2, '0')).join(' ')}${buffer.length > 20 ? '...' : ''}\n`);

// 3. 反序列化
console.log('3️⃣ 从二进制反序列化');
const decoded = mexc.PublicBookTickerV3Api.decode(buffer);
console.log('反序列化后的数据:');
console.log(`  买价: ${decoded.bidPrice} @ ${decoded.bidQuantity}`);
console.log(`  卖价: ${decoded.askPrice} @ ${decoded.askQuantity}`);

// 4. 验证数据一致性
console.log('\n4️⃣ 验证数据一致性');
const isEqual = (
    bookTicker.bidPrice === decoded.bidPrice &&
    bookTicker.bidQuantity === decoded.bidQuantity &&
    bookTicker.askPrice === decoded.askPrice &&
    bookTicker.askQuantity === decoded.askQuantity
);
console.log(`  数据是否一致: ${isEqual ? '✅ 是' : '❌ 否'}`);

// 5. 转换为JSON
console.log('\n5️⃣ 转换为JSON');
const jsonObj = mexc.PublicBookTickerV3Api.toObject(decoded);
const jsonString = JSON.stringify(jsonObj, null, 2);
console.log('JSON格式:');
console.log(jsonString);

// 6. 从JSON创建消息
console.log('\n6️⃣ 从JSON重新创建消息');
const fromJson = mexc.PublicBookTickerV3Api.fromObject(JSON.parse(jsonString));
console.log('从JSON创建的数据:');
console.log(`  买价: ${fromJson.bidPrice} @ ${fromJson.bidQuantity}`);
console.log(`  卖价: ${fromJson.askPrice} @ ${fromJson.askQuantity}`);

console.log('\n✅ 基本序列化/反序列化示例完成！'); 