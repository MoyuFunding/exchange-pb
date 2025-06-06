# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2024-06-06

### Added

- **Multi-language support**: Added Go and Node.js implementations alongside the existing Rust version
- **Go support**: 
  - Complete protobuf code generation using `protoc-gen-go`
  - Makefile for build automation
  - Example usage with JSON serialization
  - Type-safe structs with standard Go protobuf library
- **Node.js/TypeScript support**:
  - TypeScript definitions for all protobuf messages
  - Static code generation using `protobufjs`
  - NPM package configuration for `@moyufunding/exchange-pb`
  - Full JSON compatibility and runtime validation
- **Build automation**:
  - Root-level Makefile for managing all language builds
  - GitHub Actions CI/CD for automated testing
  - Automated release workflow for all package managers
- **Documentation**: 
  - Language-specific README files
  - Cross-platform usage examples
  - API reference for each language

### Changed

- **Project structure**: Reorganized into language-specific directories:
  - `rust/` - Rust implementation (moved from root)
  - `go/` - Go implementation
  - `nodejs/` - Node.js/TypeScript implementation
  - `proto/` - Shared protobuf definitions (unchanged)
- **Build system**: Updated Rust build.rs to work with new directory structure
- **CI/CD**: Enhanced GitHub Actions with multi-language testing

### Migration Guide

For existing Rust users:
- Update import paths: The crate is now located in the `rust/` directory
- All functionality remains the same, only the project structure changed
- Run `cargo build` from the `rust/` directory or use the root Makefile

## [0.1.0] - 2024-05-25

### Added

- Initial Rust implementation with Protocol Buffer definitions
- Support for MEXC exchange API data structures
- Async-ready generated structs
- Serde compatibility for JSON serialization/deserialization
- Type-safe Rust protobuf handling using `prost`
- Comprehensive examples and documentation

### Features

- Public market data types (book tickers, mini tickers, deals, depths, klines)
- Private account data types (orders, deals, account info)
- Batch operations for multiple data items
- Aggregated data structures
- Modular code organization by protobuf package 