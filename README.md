# Exchange Protocol Buffers

This Rust library provides Protocol Buffer definitions and generated code for MEXC exchange data structures.

## Overview

This library contains protobuf definitions for various MEXC exchange APIs including:

- Public market data (book tickers, mini tickers, deals, depths, klines)
- Private account data (orders, deals, account info)
- Batch operations for multiple data items
- Aggregated data structures

## Features

- **Modular Structure**: Generated code is organized by package (e.g., `mexc` module)
- **Async-ready**: Generated structs work seamlessly with async Rust code
- **Serde compatible**: All generated types support JSON serialization/deserialization
- **Type-safe**: Leverages Rust's type system for safe data handling
- **Performance**: Uses `prost` for efficient protobuf encoding/decoding

## Usage

Add this to your `Cargo.toml`:

```toml
[dependencies]
exchange-pb = { path = "." }
```

### Basic Example

```rust
use exchange_pb::mexc::*;  // Import from mexc module

fn main() {
    // Create a book ticker
    let book_ticker = PublicBookTickerV3Api {
        bid_price: "50000.00".to_string(),
        bid_quantity: "1.5".to_string(),
        ask_price: "50001.00".to_string(),
        ask_quantity: "2.0".to_string(),
    };

    println!("Bid: {} @ {}", book_ticker.bid_quantity, book_ticker.bid_price);
    println!("Ask: {} @ {}", book_ticker.ask_quantity, book_ticker.ask_price);

    // Create a wrapper for push data
    let wrapper = PushDataV3ApiWrapper {
        channel: "spot@public.bookTicker.v3.api".to_string(),
        body: Some(push_data_v3_api_wrapper::Body::PublicBookTicker(book_ticker)),
        symbol: "BTCUSDT".to_string(),
        symbol_id: "BTC_USDT".to_string(),
        create_time: 1640995200000,
        send_time: 1640995200001,
    };
}
```

### Module Structure

The library is organized into modules based on protobuf packages:

- `exchange_pb::mexc::*` - All MEXC exchange related types

You can import types in different ways:

```rust
// Import all types from mexc module
use exchange_pb::mexc::*;

// Import specific types
use exchange_pb::mexc::{PublicBookTickerV3Api, PrivateOrdersV3Api};

// Use fully qualified names
let ticker = exchange_pb::mexc::PublicBookTickerV3Api { /* ... */ };
```

### JSON Serialization

All generated types support serde serialization:

```rust
use exchange_pb::mexc::*;
use serde_json;

let ticker = PublicBookTickerV3Api {
    bid_price: "50000.00".to_string(),
    bid_quantity: "1.5".to_string(),
    ask_price: "50001.00".to_string(),
    ask_quantity: "2.0".to_string(),
};

// Serialize to JSON
let json = serde_json::to_string_pretty(&ticker)?;
println!("{}", json);

// Deserialize from JSON
let deserialized: PublicBookTickerV3Api = serde_json::from_str(&json)?;
```

### Available Types

#### Public Market Data
- `PublicBookTickerV3Api` - Best bid/ask prices and quantities
- `PublicBookTickerBatchV3Api` - Batch of book tickers
- `PublicMiniTickerV3Api` - Mini ticker with basic price info
- `PublicMiniTickersV3Api` - Batch of mini tickers
- `PublicDealsV3Api` - Trade execution data
- `PublicIncreaseDepthsV3Api` - Order book depth updates
- `PublicLimitDepthsV3Api` - Order book snapshot
- `PublicSpotKlineV3Api` - Candlestick/kline data
- `PublicAggreDepthsV3Api` - Aggregated depth data
- `PublicAggreDealsV3Api` - Aggregated trade data
- `PublicAggreBookTickerV3Api` - Aggregated book ticker

#### Private Account Data
- `PrivateOrdersV3Api` - Order information
- `PrivateDealsV3Api` - Private trade execution data
- `PrivateAccountV3Api` - Account balance and info

#### Wrapper Types
- `PushDataV3ApiWrapper` - Main wrapper for all push data types

## Building

The project uses a custom build script to compile all protobuf files recursively:

```bash
cargo build
```

The build script will:
1. Find all `.proto` files in the `proto/` directory recursively
2. Compile them using `prost-build` with package support
3. Generate Rust code organized by package (e.g., `mexc.rs`)
4. Include the generated code in the library modules

## Proto File Structure

```
proto/
└── mexc/
    ├── PublicBookTickerV3Api.proto      (package mexc;)
    ├── PublicMiniTickerV3Api.proto      (package mexc;)
    ├── PrivateOrdersV3Api.proto         (package mexc;)
    ├── PushDataV3ApiWrapper.proto       (package mexc;)
    └── ... (other proto files)
```

All proto files in the `mexc/` directory use `package mexc;` which results in generated code being placed in the `mexc.rs` file and accessible via the `mexc` module.

## Development

To add new protobuf definitions:

1. Add your `.proto` files to the appropriate directory under `proto/`
2. Include the package declaration: `package mexc;`
3. Ensure imports use just the filename (e.g., `import "SomeType.proto"`) for files in the same package
4. Run `cargo build` to regenerate the Rust code
5. The new types will be available in the appropriate module

## Testing

Run the tests to verify everything works:

```bash
cargo test
```

Run the examples:

```bash
# Basic usage example
cargo run --example basic_usage

# Modular usage example with JSON serialization
cargo run --example modular_usage
```

## License

This project is licensed under the MIT License. 