// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
/**
 * Returns a new record with all entries of the given record except the ones that
 * have a key that does not match the given predicate.
 *
 * @example
 * ```ts
 * import { filterKeys } from "https://deno.land/std@$STD_VERSION/collections/filter_keys";
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts";
 *
 * const menu = {
 *   "Salad": 11,
 *   "Soup": 8,
 *   "Pasta": 13,
 * };
 * const menuWithoutSalad = filterKeys(menu, (it) => it !== "Salad");
 *
 * assertEquals(
 *   menuWithoutSalad,
 *   {
 *     "Soup": 8,
 *     "Pasta": 13,
 *   },
 * );
 * ```
 */
export function filterKeys(record, predicate) {
  const ret = {};
  const keys = Object.keys(record);
  for (const key of keys) {
    if (predicate(key)) {
      ret[key] = record[key];
    }
  }
  return ret;
}
