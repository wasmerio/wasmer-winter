// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
/**
 * Returns all elements in the given array that produce a distinct value using
 * the given selector, preserving order by first occurrence.
 *
 * @example
 * ```ts
 * import { distinctBy } from "https://deno.land/std@$STD_VERSION/collections/distinct_by";
 * import { assertEquals } from "https://deno.land/std@$STD_VERSION/testing/asserts";
 *
 * const names = ["Anna", "Kim", "Arnold", "Kate"];
 * const exampleNamesByFirstLetter = distinctBy(names, (it) => it.charAt(0));
 *
 * assertEquals(exampleNamesByFirstLetter, ["Anna", "Kim"]);
 * ```
 */
export function distinctBy(array, selector) {
  const selectedValues = new Set();
  const ret = [];
  for (const element of array) {
    const currentSelectedValue = selector(element);
    if (!selectedValues.has(currentSelectedValue)) {
      selectedValues.add(currentSelectedValue);
      ret.push(element);
    }
  }
  return ret;
}
