#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories
const PROTO_DIR = path.join(__dirname, '../../proto/mexc');
const OUTPUT_DIR = path.join(__dirname, '../src');

function generateProtobufCode() {
    console.log('Generating Node.js protobuf code...');
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Find all proto files
    const protoFiles = fs.readdirSync(PROTO_DIR)
        .filter(file => file.endsWith('.proto'))
        .map(file => path.join(PROTO_DIR, file));

    if (protoFiles.length === 0) {
        throw new Error('No .proto files found in ' + PROTO_DIR);
    }

    console.log(`Found ${protoFiles.length} proto files:`, protoFiles.map(f => path.basename(f)));

    // Use pbjs to generate static code
    const pbjsCmd = [
        'npx pbjs',
        '-t static-module',
        '-w commonjs',
        '-o', path.join(OUTPUT_DIR, 'proto.js'),
        '--force-number',
        '--no-verify',
        '--no-convert',
        '-p', PROTO_DIR,
        ...protoFiles
    ].join(' ');

    console.log('Running pbjs command:', pbjsCmd);
    execSync(pbjsCmd, { stdio: 'inherit' });

    // Generate TypeScript definitions
    const pbtsCmd = [
        'npx pbts',
        '-o', path.join(OUTPUT_DIR, 'proto.d.ts'),
        path.join(OUTPUT_DIR, 'proto.js')
    ].join(' ');

    console.log('Running pbts command:', pbtsCmd);
    execSync(pbtsCmd, { stdio: 'inherit' });

    // Create index file
    const indexContent = `
// Generated protobuf code for MEXC exchange
export * from './proto';

// Re-export specific namespaces for convenience
import { mexc } from './proto';
export { mexc };
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent.trim());

    console.log('✅ Node.js protobuf generation complete!');
}

// Run if called directly
if (require.main === module) {
    try {
        generateProtobufCode();
    } catch (error) {
        console.error('❌ Generation failed:', error.message);
        process.exit(1);
    }
} 