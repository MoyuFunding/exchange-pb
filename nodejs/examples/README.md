# 🚀 序列化/反序列化示例代码

这个目录包含了使用 `@frank1957/exchange-pb` 进行序列化和反序列化的完整示例代码。

## 📚 可用示例

### 1. 基本序列化示例 (`basic_serialization.js`)
展示最基本的protobuf序列化和反序列化操作：
- 创建protobuf消息
- 序列化为二进制数据
- 反序列化回原始对象
- JSON转换
- 数据完整性验证

```bash
node examples/basic_serialization.js
```

### 2. 复杂嵌套消息示例 (`complex_wrapper.js`)
展示如何处理复杂的嵌套protobuf消息：
- 创建包含子消息的复杂结构
- 处理不同类型的数据（BookTicker, MiniTicker等）
- 嵌套消息的序列化和反序列化
- 压缩效率对比

```bash
node examples/complex_wrapper.js
```

### 3. WebSocket模拟示例 (`websocket_simulation.js`)
模拟真实的WebSocket数据处理场景：
- 实时市场数据处理
- 多种消息类型的处理
- 错误处理和数据验证
- 数据存储模拟
- 性能统计

```bash
node examples/websocket_simulation.js
```

### 4. 性能测试示例 (`performance_test.js`)
对比protobuf vs JSON的性能差异：
- 序列化性能测试
- 反序列化性能测试
- 内存使用分析
- 数据大小对比
- 完整性验证

```bash
node examples/performance_test.js
```

## 🏃‍♂️ 运行所有示例

你可以一次性运行所有示例：

```bash
# 运行所有示例
node examples/run_all.js

# 运行特定示例（例如第2个）
node examples/run_all.js 2
```

## 📋 示例说明

### 基本用法模式

```javascript
const { mexc } = require('@frank1957/exchange-pb');

// 1. 创建消息
const message = new mexc.PublicBookTickerV3Api({
    bidPrice: "50000.00",
    bidQuantity: "1.5"
});

// 2. 序列化
const buffer = mexc.PublicBookTickerV3Api.encode(message).finish();

// 3. 反序列化
const decoded = mexc.PublicBookTickerV3Api.decode(buffer);

// 4. JSON转换
const json = mexc.PublicBookTickerV3Api.toObject(decoded);
```

### 错误处理

```javascript
try {
    const decoded = mexc.PublicBookTickerV3Api.decode(buffer);
    // 处理数据
} catch (error) {
    console.error('反序列化失败:', error.message);
}
```

### 数据验证

```javascript
const error = mexc.PublicBookTickerV3Api.verify(message);
if (error) {
    console.error('数据验证失败:', error);
}
```

## 🎯 实际应用场景

这些示例涵盖了以下实际应用场景：

1. **API数据处理** - 处理来自交易所API的protobuf数据
2. **WebSocket数据流** - 实时处理市场数据流
3. **数据存储优化** - 使用protobuf减少存储空间
4. **网络传输优化** - 减少网络带宽占用
5. **性能优化** - 提高序列化/反序列化速度

## 🔧 开发提示

- 每个示例都包含详细的注释说明
- 示例代码可以直接在你的项目中使用
- 根据性能测试结果选择最适合的数据格式
- 注意错误处理和数据验证

## ❓ 常见问题

**Q: 如何选择protobuf还是JSON？**
A: 运行性能测试示例查看具体对比结果。通常protobuf在数据大小和速度上有优势。

**Q: 如何处理大量数据？**
A: 参考WebSocket模拟示例，使用流式处理和适当的内存管理。

**Q: 如何调试序列化问题？**
A: 使用基本示例中的数据完整性检查方法，对比原始数据和反序列化后的数据。 