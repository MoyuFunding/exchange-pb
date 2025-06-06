use std::env;
use std::fs;
use std::path::Path;

fn main() {
    println!("start build proto");
    
    // Recursively find all .proto files
    let proto_files = find_proto_files("proto").expect("Failed to find proto files");
    
    if proto_files.is_empty() {
        panic!("No .proto files found in proto directory");
    }
    
    println!("Found {} proto files: {:?}", proto_files.len(), proto_files);
    
    // Use Config for better control
    let mut config = prost_build::Config::new();
    
    // Set type attributes for better integration
    config.type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]");
    
    // Use only the mexc directory as include path since all files are there
    let include_paths = vec!["proto/mexc/"];
    
    // Compile all proto files with proper include paths
    config.compile_protos(&proto_files, &include_paths).expect("Failed to compile proto files");
    
    println!(
        "cargo:warning=OUT_DIR is {}",
        env::var("OUT_DIR").unwrap()
    );
}

fn find_proto_files<P: AsRef<Path>>(dir: P) -> Result<Vec<String>, std::io::Error> {
    let mut proto_files = Vec::new();
    find_proto_files_recursive(dir.as_ref(), &mut proto_files)?;
    Ok(proto_files)
}

fn find_proto_files_recursive(dir: &Path, proto_files: &mut Vec<String>) -> Result<(), std::io::Error> {
    if dir.is_dir() {
        for entry in fs::read_dir(dir)? {
            let entry = entry?;
            let path = entry.path();
            
            if path.is_dir() {
                // Recursively search subdirectories
                find_proto_files_recursive(&path, proto_files)?;
            } else if path.extension().and_then(|s| s.to_str()) == Some("proto") {
                // Add .proto files to the list
                if let Some(path_str) = path.to_str() {
                    proto_files.push(path_str.to_string());
                }
            }
        }
    }
    Ok(())
}