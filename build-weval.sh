#! /bin/bash

set -euo pipefail
set -x

# Note: cargo-wasix automatically runs wasm-opt with -O2, which makes the resulting binary unusable.
# Instead, we use the toolchain to build (cargo +wasix instead of cargo wasix) and optimize manually.
cargo +wasix build --target wasm32-wasmer-wasi -F weval $@
mv target/wasm32-wasmer-wasi/debug/winterjs.wasm target/wasm32-wasmer-wasi/debug/winterjs-wevalable.wasm
# mv target/wasm32-wasmer-wasi/debug/winterjs.wasm x.wasm
# In single-thread-only builds, we skip --asyncify
# echo "Optimizing with wasm-opt"
# wasm-opt x.wasm -o target/wasm32-wasmer-wasi/debug/winterjs-wevalable.wasm -O1 --enable-bulk-memory --enable-reference-types --no-validation
# rm x.wasm
# echo "Optimizing with wasm-strip"
# wasm-strip target/wasm32-wasmer-wasi/debug/winterjs-wevalable.wasm

echo "Wizening module"
../wizex/target/release/wizex \
    target/wasm32-wasmer-wasi/debug/winterjs-wevalable.wasm \
    -o w-wize.wasm \
    -r _start=wizex.resume \
    --allow-wasix \
    --inherit-stdio true \
    --mapdir /app::./tests \
    --wasm-bulk-memory true \
    --preload weval=../wevalx/lib/weval-stubs.wat

echo "Pre-evaluating module"
../wevalx/target/release/wevalx weval \
    -i w-wize.wasm \
    -o w-weav.wasm \
    &> w-output.log