// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
/**
 * Applies the given selector to elements in the given array until a value is
 * produced that is neither `null` nor `undefined` and returns that value.
 * Returns `undefined` if no such value is produced.
 *
 * @example
 * ```ts
 * import { firstNotNullishOf } from "https://deno.land/std@$STD_VERSION/collections/first_not_nullish_of";
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts";
 *
 * const tables = [
 *   { number: 11, order: null },
 *   { number: 12, order: "Soup" },
 *   { number: 13, order: "Salad" },
 * ];
 * const nextOrder = firstNotNullishOf(tables, (it) => it.order);
 *
 * assertEquals(nextOrder, "Soup");
 * ```
 */
export function firstNotNullishOf(array, selector) {
  for (const current of array) {
    const selected = selector(current);
    if (selected !== null && selected !== undefined) {
      return selected;
    }
  }
  return undefined;
}
