# 🚀 快速发布指南

这是发布Go和Node.js包的简化步骤指南。

## 📋 发布准备

1. **确保代码构建成功**
   ```bash
   make all
   ```

2. **提交所有更改**
   ```bash
   git add .
   git commit -m "准备发布 v0.2.0"
   ```

## 🟢 Go语言发布（通过Git标签）

```bash
# 1. 创建Go版本标签
git tag go/v0.2.0

# 2. 推送标签到GitHub
git push origin go/v0.2.0
```

**用户使用方式：**
```bash
go get github.com/MoyuFunding/exchange-pb/go@v0.2.0
```

## 🟨 Node.js发布（发布到NPM）

```bash
# 1. 登录NPM（首次需要）
npm login

# 2. 进入nodejs目录
cd nodejs

# 3. 发布到NPM
npm publish
```

**用户使用方式：**
```bash
npm install @moyufunding/exchange-pb@0.1.0
```

## 🚀 自动化发布（推荐）

### 方式1: 使用统一版本管理脚本
```bash
./scripts/bump_version.sh 0.2.0
git push origin main
git push --tags
```

### 方式2: 使用GitHub Actions
```bash
# 触发自动发布工作流
gh workflow run release.yml -f version=v0.2.0
```

### 方式3: 创建GitHub Release
1. 在GitHub页面创建新的Release
2. 标签填写：`v0.2.0`
3. 发布后GitHub Actions会自动：
   - 发布Rust crate到crates.io
   - 创建Go模块标签
   - 发布Node.js包到NPM

## 🔧 注意事项

### Go发布
- ✅ 无需注册账户，通过Git标签即可
- ✅ 用户可以直接通过`go get`使用
- ✅ 版本格式：`go/v0.2.0`

### Node.js发布
- ⚠️ 需要NPM账户和登录
- ⚠️ 包名需要唯一或使用scope（如@moyufunding/）
- ⚠️ 需要设置NPM_TOKEN环境变量用于CI

### 环境变量设置（CI/CD）
```bash
# GitHub Secrets需要设置：
CARGO_REGISTRY_TOKEN=<crates.io token>
NPM_TOKEN=<npm publish token>
```

## 📚 完整文档
- 详细发布指南：`PUBLISHING.md`
- 发布演示脚本：`./scripts/demo_publish.sh` 