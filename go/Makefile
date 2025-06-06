.PHONY: generate clean install-tools

# Installation of required tools
install-tools:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest

# Generate Go code from protobuf files
generate: install-tools
	@echo "Generating Go protobuf files..."
	@mkdir -p pkg/mexc
	protoc \
		--go_out=./pkg \
		--go_opt=paths=source_relative \
		--go_opt=Mmexc=github.com/MoyuFunding/exchange-pb/go/pkg/mexc \
		--proto_path=../proto/mexc \
		../proto/mexc/*.proto
	@echo "Go protobuf generation complete!"

# Clean generated files
clean:
	rm -rf pkg/

# Test the generated code
test:
	go test ./...

# Format code
fmt:
	go fmt ./...

# Build and test
build: generate fmt test
	@echo "Build successful!" 