#!/usr/bin/env node

const { mexc } = require('@moyufunding/exchange-pb');

console.log('=== Exchange PB Node.js Example ===');

// Create a book ticker
const bookTicker = new mexc.PublicBookTickerV3Api({
    bidPrice: "50000.00",
    bidQuantity: "1.5",
    askPrice: "50001.00",
    askQuantity: "2.0"
});

console.log(`Bid: ${bookTicker.bidQuantity} @ ${bookTicker.bidPrice}`);
console.log(`Ask: ${bookTicker.askQuantity} @ ${bookTicker.askPrice}`);

// Convert to plain object for JSON
const plainObject = mexc.PublicBookTickerV3Api.toObject(bookTicker);
console.log('\nJSON representation:');
console.log(JSON.stringify(plainObject, null, 2));

// Protobuf binary serialization
const buffer = mexc.PublicBookTickerV3Api.encode(bookTicker).finish();
console.log(`\nProtobuf binary size: ${buffer.length} bytes`);

// Deserialize from protobuf binary
const decoded = mexc.PublicBookTickerV3Api.decode(buffer);
console.log(`Decoded bid price: ${decoded.bidPrice}`);

// Create a push data wrapper
const wrapper = new mexc.PushDataV3ApiWrapper({
    channel: "spot@public.bookTicker.v3.api",
    symbol: "BTCUSDT",
    symbolId: "BTC_USDT",
    createTime: 1640995200000,
    sendTime: 1640995200001,
    publicBookTicker: bookTicker
});

console.log(`\nWrapper created for symbol: ${wrapper.symbol}`);

// Serialize wrapper
const wrapperBuffer = mexc.PushDataV3ApiWrapper.encode(wrapper).finish();
console.log(`Wrapper binary size: ${wrapperBuffer.length} bytes`);

// Validation example
const error = mexc.PublicBookTickerV3Api.verify(bookTicker);
if (error) {
    console.error('Validation error:', error);
} else {
    console.log('\n✅ Message validation passed');
}

console.log('\n=== Example completed successfully! ==='); 