// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// deno-lint-ignore-file no-explicit-any
export function createSecureContext(options) {
    return {
        ca: options?.ca,
        cert: options?.cert,
        key: options?.key,
    };
}
export default {
    createSecureContext,
};
