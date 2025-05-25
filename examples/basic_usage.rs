use exchange_pb::*;

fn main() {
    // Create a book ticker
    let book_ticker = PublicBookTickerV3Api {
        bid_price: "50000.00".to_string(),
        bid_quantity: "1.5".to_string(),
        ask_price: "50001.00".to_string(),
        ask_quantity: "2.0".to_string(),
    };

    println!("Book Ticker:");
    println!("  Bid: {} @ {}", book_ticker.bid_quantity, book_ticker.bid_price);
    println!("  Ask: {} @ {}", book_ticker.ask_quantity, book_ticker.ask_price);

    // Create a batch of book tickers
    let batch = PublicBookTickerBatchV3Api {
        items: vec![book_ticker],
    };

    println!("\nBatch contains {} tickers", batch.items.len());

    // Create a private order
    let order = PrivateOrdersV3Api {
        id: "order_123".to_string(),
        client_id: "client_456".to_string(),
        price: "50000.00".to_string(),
        quantity: "1.0".to_string(),
        amount: "50000.00".to_string(),
        avg_price: "50000.00".to_string(),
        order_type: 1, // Market order
        trade_type: 1, // Buy
        is_maker: false,
        remain_amount: "0.00".to_string(),
        remain_quantity: "0.00".to_string(),
        last_deal_quantity: "1.0".to_string(),
        cumulative_quantity: "1.0".to_string(),
        cumulative_amount: "50000.00".to_string(),
        status: 2, // Filled
        create_time: 1640995200000, // Unix timestamp
        market: "BTCUSDT".to_string(),
        trigger_type: 0,
        trigger_price: "".to_string(),
        state: 1,
        oco_id: "".to_string(),
        route_factor: "".to_string(),
        symbol_id: "BTC_USDT".to_string(),
        market_id: "1".to_string(),
        market_currency_id: "USDT".to_string(),
        currency_id: "BTC".to_string(),
    };

    println!("\nOrder:");
    println!("  ID: {}", order.id);
    println!("  Market: {}", order.market);
    println!("  Price: {}", order.price);
    println!("  Quantity: {}", order.quantity);
    println!("  Status: {}", order.status);
} 