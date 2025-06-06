# Exchange Protocol Buffers - Node.js

Node.js/TypeScript implementation of the MEXC exchange Protocol Buffer definitions.

## Installation

```bash
npm install @frank1957/exchange-pb
```

## Usage

### TypeScript

```typescript
import { mexc } from '@frank1957/exchange-pb';

// Create a book ticker
const bookTicker = new mexc.PublicBookTickerV3Api({
    bidPrice: "50000.00",
    bidQuantity: "1.5",
    askPrice: "50001.00",
    askQuantity: "2.0"
});

console.log(`Bid: ${bookTicker.bidQuantity} @ ${bookTicker.bidPrice}`);
console.log(`Ask: ${bookTicker.askQuantity} @ ${bookTicker.askPrice}`);

// Create a wrapper for push data
const wrapper = new mexc.PushDataV3ApiWrapper({
    channel: "spot@public.bookTicker.v3.api",
    symbol: "BTCUSDT",
    symbolId: "BTC_USDT",
    createTime: 1640995200000,
    sendTime: 1640995200001,
    publicBookTicker: bookTicker
});

// Serialize to protobuf binary
const buffer = mexc.PushDataV3ApiWrapper.encode(wrapper).finish();

// Deserialize from protobuf binary
const decoded = mexc.PushDataV3ApiWrapper.decode(buffer);

// Convert to plain object
const plainObject = mexc.PushDataV3ApiWrapper.toObject(wrapper);
console.log('Plain object:', JSON.stringify(plainObject, null, 2));
```

### JavaScript

```javascript
const { mexc } = require('@frank1957/exchange-pb');

// Create a book ticker
const bookTicker = new mexc.PublicBookTickerV3Api({
    bidPrice: "50000.00",
    bidQuantity: "1.5", 
    askPrice: "50001.00",
    askQuantity: "2.0"
});

console.log(`Bid: ${bookTicker.bidQuantity} @ ${bookTicker.bidPrice}`);

// JSON conversion
const json = mexc.PublicBookTickerV3Api.toObject(bookTicker);
console.log('JSON:', JSON.stringify(json, null, 2));

// Create from plain object
const fromObject = mexc.PublicBookTickerV3Api.fromObject({
    bidPrice: "49999.00",
    bidQuantity: "2.0",
    askPrice: "50000.00", 
    askQuantity: "1.8"
});
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Building

```bash
# Install dependencies
npm install

# Generate protobuf code
npm run generate

# Compile TypeScript
npm run compile

# Build everything
npm run build

# Run tests
npm run test
```

### Project Structure

```
nodejs/
├── package.json         # NPM package configuration
├── tsconfig.json       # TypeScript configuration  
├── scripts/            # Build scripts
│   └── generate.js     # Protobuf code generation
├── src/                # Generated source code
│   ├── index.ts        # Main entry point
│   ├── proto.js        # Generated protobuf code
│   └── proto.d.ts      # TypeScript definitions
└── lib/                # Compiled output (published)
```

## Features

- **Full TypeScript Support**: Complete type definitions for all protobuf messages
- **Runtime Type Safety**: protobufjs provides runtime validation
- **JSON Compatibility**: Seamless conversion between protobuf and JSON
- **Binary Serialization**: Efficient protobuf binary encoding/decoding
- **Tree-shakable**: Import only what you need
- **Documentation**: Generated code includes JSDoc comments

## Generated Types

All protobuf messages are available in the `mexc` namespace:

- `mexc.PublicBookTickerV3Api` - Best bid/ask prices and quantities
- `mexc.PublicMiniTickerV3Api` - Mini ticker with basic price info
- `mexc.PrivateOrdersV3Api` - Order information  
- `mexc.PushDataV3ApiWrapper` - Wrapper for all push data types
- And more...

## API Reference

### Creating Messages

```typescript
// Constructor approach
const ticker = new mexc.PublicBookTickerV3Api({
    bidPrice: "50000.00",
    bidQuantity: "1.5"
});

// From plain object
const ticker2 = mexc.PublicBookTickerV3Api.fromObject({
    bidPrice: "50000.00", 
    bidQuantity: "1.5"
});
```

### Serialization

```typescript
// To protobuf binary
const buffer = mexc.PublicBookTickerV3Api.encode(ticker).finish();

// From protobuf binary
const decoded = mexc.PublicBookTickerV3Api.decode(buffer);

// To plain object/JSON
const object = mexc.PublicBookTickerV3Api.toObject(ticker);
const json = JSON.stringify(object);
```

### Validation

```typescript
// Verify message structure
const error = mexc.PublicBookTickerV3Api.verify(ticker);
if (error) {
    console.error('Invalid message:', error);
}
```

## Examples

See the `examples/` directory for more usage examples including:

- Basic message creation and serialization
- Working with complex nested messages
- JSON conversion patterns
- Error handling
- Performance optimization tips 