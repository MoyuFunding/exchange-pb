# Exchange Protocol Buffers - Go

Go implementation of the MEXC exchange Protocol Buffer definitions.

## Installation

```bash
go get github.com/MoyuFunding/exchange-pb/go
```

## Usage

```go
package main

import (
    "fmt"
    "encoding/json"
    
    "github.com/MoyuFunding/exchange-pb/go/pkg/mexc"
)

func main() {
    // Create a book ticker
    bookTicker := &mexc.PublicBookTickerV3Api{
        BidPrice:     "50000.00",
        BidQuantity:  "1.5",
        AskPrice:     "50001.00", 
        AskQuantity:  "2.0",
    }

    fmt.Printf("Bid: %s @ %s\n", bookTicker.BidQuantity, bookTicker.BidPrice)
    fmt.Printf("Ask: %s @ %s\n", bookTicker.AskQuantity, bookTicker.AskPrice)

    // JSON serialization
    jsonData, err := json.Marshal(bookTicker)
    if err != nil {
        panic(err)
    }
    fmt.Printf("JSON: %s\n", string(jsonData))

    // Create a wrapper for push data
    wrapper := &mexc.PushDataV3ApiWrapper{
        Channel:    "spot@public.bookTicker.v3.api",
        Symbol:     "BTCUSDT",
        SymbolId:   "BTC_USDT", 
        CreateTime: 1640995200000,
        SendTime:   1640995200001,
        Body: &mexc.PushDataV3ApiWrapper_PublicBookTicker{
            PublicBookTicker: bookTicker,
        },
    }
    
    fmt.Printf("Wrapper: %+v\n", wrapper)
}
```

## Development

### Prerequisites

- Go 1.21+
- Protocol Buffer compiler (`protoc`)

### Building

```bash
# Install required tools
make install-tools

# Generate protobuf code
make generate

# Run tests
make test

# Build everything
make build
```

### Project Structure

```
go/
├── Makefile              # Build automation
├── go.mod               # Go module definition
├── pkg/                 # Generated protobuf code
│   └── mexc/           # MEXC exchange types
└── examples/           # Usage examples
```

## Features

- **Type Safety**: Full Go type safety with protobuf generated structs
- **JSON Support**: Native JSON marshaling/unmarshaling 
- **Performance**: Efficient protobuf encoding/decoding
- **Standard Library**: Uses standard Go protobuf library
- **Documentation**: Generated code includes documentation

## Generated Types

All protobuf messages are generated as Go structs in the `mexc` package:

- `PublicBookTickerV3Api` - Best bid/ask prices and quantities
- `PublicMiniTickerV3Api` - Mini ticker with basic price info  
- `PrivateOrdersV3Api` - Order information
- `PushDataV3ApiWrapper` - Wrapper for all push data types
- And more...

## Examples

See the `examples/` directory for more usage examples. 