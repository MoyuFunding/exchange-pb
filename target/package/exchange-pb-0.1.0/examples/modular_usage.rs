use exchange_pb::mexc::*;  // 使用 mexc 模块
use serde_json;

fn main() {
    println!("=== MEXC Exchange Protobuf Demo ===");
    
    // 创建一个 book ticker
    let book_ticker = PublicBookTickerV3Api {
        bid_price: "50000.00".to_string(),
        bid_quantity: "1.5".to_string(),
        ask_price: "50001.00".to_string(),
        ask_quantity: "2.0".to_string(),
    };

    println!("1. 单个 Book Ticker:");
    println!("   Bid: {} @ {}", book_ticker.bid_quantity, book_ticker.bid_price);
    println!("   Ask: {} @ {}", book_ticker.ask_quantity, book_ticker.ask_price);

    // 创建批量 book tickers
    let batch = PublicBookTickerBatchV3Api {
        items: vec![book_ticker.clone()],
    };

    println!("\n2. 批量 Book Tickers:");
    println!("   包含 {} 个 tickers", batch.items.len());

    // 测试序列化
    println!("\n3. JSON 序列化:");
    match serde_json::to_string_pretty(&book_ticker) {
        Ok(json) => println!("   {}", json),
        Err(e) => println!("   序列化失败: {}", e),
    }

    // 创建一个 mini ticker (使用正确的字段名)
    let mini_ticker = PublicMiniTickerV3Api {
        symbol: "BTCUSDT".to_string(),
        price: "50000.50".to_string(),        // 最新价格
        rate: "0.20".to_string(),             // utc+8时区涨跌幅
        zoned_rate: "0.20".to_string(),       // 时区涨跌幅
        high: "50100.00".to_string(),         // 滚动最高价
        low: "49800.00".to_string(),          // 滚动最低价
        volume: "61672800.00".to_string(),    // 滚动成交额
        quantity: "1234.56".to_string(),      // 滚动成交量
        last_close_rate: "0.18".to_string(),
        last_close_zoned_rate: "0.18".to_string(),
        last_close_high: "50050.00".to_string(),  // 上期收盘价模式滚动最高价
        last_close_low: "49850.00".to_string(),   // 上期收盘价模式滚动最低价
    };

    println!("\n4. Mini Ticker 信息:");
    println!("   交易对: {}", mini_ticker.symbol);
    println!("   最新价: {}", mini_ticker.price);
    println!("   涨跌幅: {}%", mini_ticker.rate);
    println!("   24h高: {}", mini_ticker.high);
    println!("   24h低: {}", mini_ticker.low);
    println!("   成交量: {}", mini_ticker.quantity);
    println!("   成交额: {}", mini_ticker.volume);

    // 创建私有订单
    let order = PrivateOrdersV3Api {
        id: "order_123456".to_string(),
        client_id: "client_abc".to_string(),
        price: "50000.00".to_string(),
        quantity: "1.0".to_string(),
        amount: "50000.00".to_string(),
        avg_price: "50000.00".to_string(),
        order_type: 1, // 市价单
        trade_type: 1, // 买入
        is_maker: false,
        remain_amount: "0.00".to_string(),
        remain_quantity: "0.00".to_string(),
        last_deal_quantity: "1.0".to_string(),
        cumulative_quantity: "1.0".to_string(),
        cumulative_amount: "50000.00".to_string(),
        status: 2, // 完全成交
        create_time: 1640995200000,
        market: "BTCUSDT".to_string(),
        symbol_id: "BTC_USDT".to_string(),
        market_id: "1".to_string(),
        market_currency_id: "USDT".to_string(),
        currency_id: "BTC".to_string(),
        ..Default::default()
    };

    println!("\n5. 私有订单信息:");
    println!("   订单ID: {}", order.id);
    println!("   客户端ID: {}", order.client_id);
    println!("   交易对: {}", order.market);
    println!("   价格: {}", order.price);
    println!("   数量: {}", order.quantity);
    println!("   状态: {} (2=完全成交)", order.status);
    println!("   是否Maker: {}", order.is_maker);

    println!("\n=== 演示完成 ===");
} 