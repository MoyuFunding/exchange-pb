# 发布指南 (Publishing Guide)

本文档详细说明如何发布Go和Node.js版本的exchange-pb库。

## 🟢 Go语言发布流程

Go语言使用Git标签来管理版本，不需要上传到专门的包管理器。

### 1. 准备发布

```bash
# 1. 确保代码生成成功
make go

# 2. 运行测试
cd go && make test

# 3. 整理依赖
go mod tidy

# 4. 提交所有更改
git add .
git commit -m "feat: prepare go module for release v0.2.0"
```

### 2. 创建Git标签

```bash
# 为Go模块创建带前缀的标签
git tag go/v0.2.0
git push origin go/v0.2.0
```

### 3. 验证发布

用户现在可以通过以下方式使用：

```bash
go get github.com/MoyuFunding/exchange-pb/go@v0.2.0
```

### 4. 自动发布（可选）

项目已配置GitHub Actions自动发布：

```bash
# 通过手动触发工作流
gh workflow run release.yml -f version=v0.2.0
```

## 🟨 Node.js发布流程

Node.js发布到NPM注册表，需要npm账户和发布权限。

### 1. 准备发布

```bash
# 1. 确保代码生成和编译成功
cd nodejs
npm run build

# 2. 运行测试（如果有的话）
npm test

# 3. 检查包内容
npm pack --dry-run
```

### 2. 更新版本号

```bash
# 自动更新package.json中的版本号
npm version patch  # 小版本更新 (0.1.0 -> 0.1.1)
npm version minor  # 中版本更新 (0.1.0 -> 0.2.0)
npm version major  # 大版本更新 (0.1.0 -> 1.0.0)

# 或者手动指定版本
npm version 0.2.0 --no-git-tag-version
```

### 3. 发布到NPM

```bash
# 登录到NPM (首次)
npm login

# 发布包
npm publish

# 如果是测试版本
npm publish --tag beta
```

### 4. 验证发布

```bash
# 检查发布状态
npm view @moyufunding/exchange-pb

# 测试安装
npm install @moyufunding/exchange-pb@latest
```

## 🚀 自动化发布流程

### GitHub Actions自动发布

项目配置了完整的CI/CD流程：

1. **创建Release时自动发布**：
   ```bash
   # 在GitHub上创建新的Release
   # 系统会自动：
   # - 发布Rust crate到crates.io
   # - 创建Go模块标签
   # - 发布Node.js包到NPM
   ```

2. **手动触发发布**：
   ```bash
   # 使用GitHub CLI
   gh workflow run release.yml -f version=v0.2.0
   ```

### 所需的密钥配置

在GitHub仓库的Settings > Secrets中配置：

- `CARGO_REGISTRY_TOKEN` - Rust crates.io API token
- `NPM_TOKEN` - NPM发布token

## 📋 发布检查清单

### 发布前检查

- [ ] 所有语言版本构建成功 (`make all`)
- [ ] 测试通过 (`make test`)
- [ ] 更新了CHANGELOG.md
- [ ] 更新了版本号
- [ ] 提交了所有更改

### Go发布检查

- [ ] `go mod tidy` 执行成功
- [ ] 创建了正确的Git标签 `go/vX.Y.Z`
- [ ] 标签已推送到远程仓库

### Node.js发布检查

- [ ] `npm run build` 执行成功
- [ ] 版本号已更新
- [ ] `npm publish --dry-run` 检查通过
- [ ] 已登录NPM账户

## 🔄 版本管理策略

### 语义化版本

- **主版本号** (X.0.0): 不兼容的API更改
- **次版本号** (0.X.0): 向后兼容的功能性新增
- **修订号** (0.0.X): 向后兼容的问题修正

### 多语言版本同步

建议保持所有语言版本号同步：

```bash
# 同时更新所有版本
./scripts/bump_version.sh 0.2.0
```

## 📚 使用示例

### Go用户安装使用

```bash
# 安装特定版本
go get github.com/MoyuFunding/exchange-pb/go@v0.2.0

# 使用
import "github.com/MoyuFunding/exchange-pb/go/pkg/mexc"
```

### Node.js用户安装使用

```bash
# 安装最新版本
npm install @moyufunding/exchange-pb

# 安装特定版本
npm install @moyufunding/exchange-pb@0.2.0
```

## 🐛 故障排除

### 常见问题

1. **Go模块找不到**
   - 确保Git标签格式正确：`go/vX.Y.Z`
   - 检查标签是否已推送到远程

2. **NPM发布失败**
   - 检查包名是否已被占用
   - 验证NPM_TOKEN权限
   - 确保版本号没有重复

3. **权限问题**
   - 确保GitHub Secrets正确配置
   - 验证各平台的API token有效性

### 回滚发布

```bash
# 回滚NPM包 (不推荐，建议发布修复版本)
npm unpublish @moyufunding/exchange-pb@0.2.0 --force

# 删除Git标签
git tag -d go/v0.2.0
git push origin :refs/tags/go/v0.2.0
``` 