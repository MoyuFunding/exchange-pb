// Include generated protobuf modules
pub mod mexc {
    include!(concat!(env!("OUT_DIR"), "/mexc.rs"));
}

// Re-export for convenience
pub use mexc::*;
pub use prost;

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_protobuf_structs() {
        // Test that we can create protobuf structs
        let ticker = PublicBookTickerV3Api {
            bid_price: "100.0".to_string(),
            bid_quantity: "10.0".to_string(),
            ask_price: "101.0".to_string(),
            ask_quantity: "5.0".to_string(),
        };
        
        assert_eq!(ticker.bid_price, "100.0");
        assert_eq!(ticker.ask_price, "101.0");
    }
    
    #[test]
    fn test_serde_serialization() {
        // Test that serde serialization works
        let ticker = PublicBookTickerV3Api {
            bid_price: "100.0".to_string(),
            bid_quantity: "10.0".to_string(),
            ask_price: "101.0".to_string(),
            ask_quantity: "5.0".to_string(),
        };
        
        let json = serde_json::to_string(&ticker).expect("Serialization failed");
        let deserialized: PublicBookTickerV3Api = serde_json::from_str(&json).expect("Deserialization failed");
        
        assert_eq!(ticker.bid_price, deserialized.bid_price);
        assert_eq!(ticker.ask_price, deserialized.ask_price);
    }
}
