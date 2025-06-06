package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/MoyuFunding/exchange-pb/go/pkg/mexc"
	"google.golang.org/protobuf/proto"
)

func main() {
	fmt.Println("=== Exchange PB Go Example ===")

	// Create a book ticker
	bookTicker := &mexc.PublicBookTickerV3Api{
		BidPrice:    "50000.00",
		BidQuantity: "1.5",
		AskPrice:    "50001.00",
		AskQuantity: "2.0",
	}

	fmt.Printf("Bid: %s @ %s\n", bookTicker.BidQuantity, bookTicker.BidPrice)
	fmt.Printf("Ask: %s @ %s\n", bookTicker.AskQuantity, bookTicker.AskPrice)

	// JSON serialization
	jsonData, err := json.MarshalIndent(bookTicker, "", "  ")
	if err != nil {
		log.Fatal("JSON marshal error:", err)
	}
	fmt.Printf("\nJSON representation:\n%s\n", string(jsonData))

	// Protobuf binary serialization
	data, err := proto.Marshal(bookTicker)
	if err != nil {
		log.Fatal("Protobuf marshal error:", err)
	}
	fmt.Printf("\nProtobuf binary size: %d bytes\n", len(data))

	// Deserialize from protobuf binary
	var decoded mexc.PublicBookTickerV3Api
	err = proto.Unmarshal(data, &decoded)
	if err != nil {
		log.Fatal("Protobuf unmarshal error:", err)
	}
	fmt.Printf("Decoded bid price: %s\n", decoded.BidPrice)

	// Create a push data wrapper
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

	fmt.Printf("\nWrapper created for symbol: %s\n", wrapper.Symbol)

	// Serialize wrapper
	wrapperData, err := proto.Marshal(wrapper)
	if err != nil {
		log.Fatal("Wrapper marshal error:", err)
	}
	fmt.Printf("Wrapper binary size: %d bytes\n", len(wrapperData))

	fmt.Println("\n=== Example completed successfully! ===")
}
