#!/bin/bash

# Script to add go_package option to all proto files

PROTO_DIR="proto/mexc"
GO_PACKAGE="github.com/MoyuFunding/exchange-pb/go/pkg/mexc"

echo "Adding go_package option to all proto files..."

for proto_file in ${PROTO_DIR}/*.proto; do
    # Skip if file doesn't exist or is not a regular file
    [ -f "$proto_file" ] || continue
    
    # Skip LICENSE file
    if [[ "$proto_file" == *"LICENSE"* ]]; then
        continue
    fi
    
    echo "Processing: $proto_file"
    
    # Check if go_package option already exists
    if grep -q "option go_package" "$proto_file"; then
        echo "  - go_package already exists, skipping"
        continue
    fi
    
    # Add go_package option after the package declaration
    sed -i.bak "/^package mexc;/a\\
option go_package = \"$GO_PACKAGE\";
" "$proto_file"
    
    # Remove backup file
    rm -f "${proto_file}.bak"
    
    echo "  - Added go_package option"
done

echo "✅ Finished adding go_package option to all proto files" 