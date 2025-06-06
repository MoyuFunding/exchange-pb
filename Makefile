.PHONY: all rust go nodejs clean test install-deps help

# Default target
all: rust go nodejs

# Install all dependencies
install-deps:
	@echo "Installing dependencies for all languages..."
	@cd go && make install-tools
	@cd nodejs && npm install

# Build Rust version
rust:
	@echo "Building Rust version..."
	@cd rust && cargo build

# Build Go version  
go:
	@echo "Building Go version..."
	@cd go && make generate

# Build Node.js version
nodejs:
	@echo "Building Node.js version..."
	@cd nodejs && npm run build

# Run tests for all languages
test:
	@echo "Running tests for all languages..."
	@cd rust && cargo test
	@cd go && make test
	@cd nodejs && npm test

# Clean all build artifacts
clean:
	@echo "Cleaning all build artifacts..."
	@cd rust && cargo clean
	@cd go && make clean  
	@cd nodejs && npm run clean

# Format code for all languages
fmt:
	@echo "Formatting code for all languages..."
	@cd rust && cargo fmt
	@cd go && make fmt
	@cd nodejs && npm run format || echo "No format script found for nodejs"

# Publish packages (requires proper credentials)
publish:
	@echo "Publishing packages..."
	@cd rust && cargo publish --dry-run
	@cd go && echo "Go modules are published via git tags"
	@cd nodejs && npm publish --dry-run

# Development workflow - install deps and build everything
dev: install-deps all test

# Help
help:
	@echo "Available targets:"
	@echo "  all        - Build all language versions"
	@echo "  rust       - Build Rust version"
	@echo "  go         - Build Go version"
	@echo "  nodejs     - Build Node.js version"
	@echo "  test       - Run tests for all languages"
	@echo "  clean      - Clean all build artifacts"
	@echo "  fmt        - Format code for all languages"
	@echo "  publish    - Publish packages (dry-run)"
	@echo "  dev        - Install dependencies and build everything"
	@echo "  install-deps - Install dependencies for all languages"
	@echo "  help       - Show this help message" 