#!/bin/bash

# Version bump script for multi-language project
# Usage: ./scripts/bump_version.sh <new_version>

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <new_version>"
    echo "Example: $0 0.2.0"
    exit 1
fi

NEW_VERSION="$1"

# Validate version format (basic check)
if ! [[ $NEW_VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "❌ Invalid version format. Use semver format: X.Y.Z"
    exit 1
fi

echo "🚀 Bumping version to $NEW_VERSION"

# Update Rust Cargo.toml
echo "📦 Updating Rust version..."
sed -i.bak "s/^version = \".*\"/version = \"$NEW_VERSION\"/" rust/Cargo.toml
rm -f rust/Cargo.toml.bak
echo "✅ Updated rust/Cargo.toml"

# Update Node.js package.json
echo "📦 Updating Node.js version..."
cd nodejs
npm version "$NEW_VERSION" --no-git-tag-version
cd ..
echo "✅ Updated nodejs/package.json"

# Go doesn't need version update in go.mod (handled via git tags)
echo "📦 Go version will be handled via git tags"

# Update README versions if they exist
echo "📝 Updating documentation..."
if grep -q "@moyufunding/exchange-pb@" README.md; then
    sed -i.bak "s/@moyufunding\/exchange-pb@[0-9]\+\.[0-9]\+\.[0-9]\+/@moyufunding\/exchange-pb@$NEW_VERSION/g" README.md
    rm -f README.md.bak
fi

# Update CHANGELOG.md with placeholder for new version
echo "📝 Updating CHANGELOG.md..."
sed -i.bak "1s/^/## [$NEW_VERSION] - $(date +%Y-%m-%d)\n\n### Added\n\n### Changed\n\n### Fixed\n\n/" CHANGELOG.md
rm -f CHANGELOG.md.bak

echo ""
echo "✅ Version bump completed!"
echo ""
echo "📋 Next steps:"
echo "1. Review and update CHANGELOG.md with actual changes"
echo "2. Test all builds: make all"
echo "3. Commit changes: git add . && git commit -m 'chore: bump version to $NEW_VERSION'"
echo "4. Create tags and publish:"
echo "   - Go: git tag go/v$NEW_VERSION && git push origin go/v$NEW_VERSION"
echo "   - Node.js: cd nodejs && npm publish"
echo "   - Rust: cd rust && cargo publish"
echo ""
echo "Or use the automated release workflow:"
echo "gh workflow run release.yml -f version=v$NEW_VERSION" 