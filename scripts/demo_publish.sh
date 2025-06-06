#!/bin/bash

# 发布演示脚本 - 展示Go和Node.js的发布流程
set -e

echo "🚀 Exchange-PB 多语言发布演示"
echo "================================"

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}📋 发布前检查${NC}"
echo "1. 确保所有语言版本构建成功..."
make all

echo ""
echo -e "${BLUE}🟢 Go语言发布流程${NC}"
echo "================================"

echo "1. 进入Go目录并整理依赖..."
cd go
go mod tidy

echo "2. 验证Go包结构..."
echo "   - 包路径: github.com/MoyuFunding/exchange-pb/go"
echo "   - 生成的文件数量: $(ls pkg/*.pb.go | wc -l) 个"

echo "3. 准备发布 Go v0.2.0..."
echo "   在实际环境中，你需要执行:"
echo -e "${YELLOW}   git add .${NC}"
echo -e "${YELLOW}   git commit -m 'release: prepare go module v0.2.0'${NC}"
echo -e "${YELLOW}   git tag go/v0.2.0${NC}"
echo -e "${YELLOW}   git push origin go/v0.2.0${NC}"

echo "4. 发布后，用户可以这样使用:"
echo -e "${GREEN}   go get github.com/MoyuFunding/exchange-pb/go@v0.2.0${NC}"

echo ""
echo -e "${BLUE}🟨 Node.js发布流程${NC}"
echo "================================"

cd ../nodejs

echo "1. 验证Node.js构建..."
npm run build

echo "2. 检查包内容..."
echo "   - 包名: @moyufunding/exchange-pb"
echo "   - 版本: $(node -p "require('./package.json').version")"
echo "   - 生成的文件: $(ls -la lib/ | grep -E '\.(js|d\.ts)$' | wc -l) 个"

echo "3. 模拟发布检查..."
npm pack --dry-run | head -20

echo "4. 准备发布到NPM..."
echo "   在实际环境中，你需要执行:"
echo -e "${YELLOW}   npm login${NC}"
echo -e "${YELLOW}   npm publish${NC}"

echo "5. 发布后，用户可以这样使用:"
echo -e "${GREEN}   npm install @moyufunding/exchange-pb@0.1.0${NC}"

echo ""
echo -e "${BLUE}🚀 自动化发布方式${NC}"
echo "================================"

cd ..

echo "1. 使用统一版本管理脚本:"
echo -e "${YELLOW}   ./scripts/bump_version.sh 0.2.0${NC}"

echo "2. 使用GitHub Actions自动发布:"
echo -e "${YELLOW}   gh workflow run release.yml -f version=v0.2.0${NC}"

echo "3. 或者在GitHub上创建Release，系统会自动:"
echo "   ✅ 发布Rust crate到crates.io"
echo "   ✅ 创建Go模块标签"
echo "   ✅ 发布Node.js包到NPM"

echo ""
echo -e "${GREEN}✅ 发布演示完成！${NC}"
echo ""
echo "📚 查看完整发布指南:"
echo "   cat PUBLISHING.md" 