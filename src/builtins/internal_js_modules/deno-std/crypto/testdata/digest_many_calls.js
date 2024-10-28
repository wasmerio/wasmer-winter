// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
import { crypto as stdCrypto } from "../crypto";
import { instantiateWithInstance } from "../_wasm/lib/deno_std_wasm_crypto.generated.mjs";
import { encodeHex } from "../../encoding/hex";
const memory = instantiateWithInstance().instance.exports.memory;
const heapBytesInitial = memory.buffer.byteLength;
let state = new ArrayBuffer(0);
for (let i = 0; i < 1000000; i++) {
  state = stdCrypto.subtle.digestSync(
    {
      name: "BLAKE3",
    },
    state
  );
}
const heapBytesFinal = memory.buffer.byteLength;
const stateFinal = encodeHex(state);
// deno-lint-ignore no-console
console.log(
  JSON.stringify({
    heapBytesInitial,
    heapBytesFinal,
    stateFinal,
  })
);
