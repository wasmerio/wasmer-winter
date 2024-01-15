const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
};

const assert_true = (condition, message) => {
  if (condition !== true) {
    throw new Error(message || "Assertion failed");
  }
}

const assert_false = (condition, message) => {
  if (condition !== false) {
    throw new Error(message || "Assertion failed");
  }
}

const assert_array_equals = (array1, array2, message) => {
  if (array1.length != array2.length || array1.length === undefined) {
    throw new Error(message || "Assertion failed");
  }

  for (let i in array1) {
    if (array1[i] != array2[i]) {
      throw new Error(message || "Assertion failed");
    }
  }

  // Make sure array2 has no keys that array1 doesn't
  for (let i in array2) {
    if (array1[i] != array2[i]) {
      throw new Error(message || "Assertion failed");
    }
  }
}

const assert_unreached = (message) => {
  throw new Error(message || "Assertion failed: should not be reached");
}

const assert_throws_js = (f, message) => {
  try {
    f();
    throw undefined;
  }
  catch (e) {
    if (e === undefined) {
      throw new Error(`Should have thrown error: ${message}`);
    }
  }
}

const assert_equals = (actual, expected, message) => {
  assert(
    actual === expected,
    message || `Expected ${expected} but got ${actual}`
  );
};

const assert_not_equals = (actual, expected, message) => {
  assert(
    actual !== expected,
    message || `Expected ${expected} but got ${actual}`
  );
};

const assert_less_than = (v1, v2, message) => {
  assert(
    v1 < v2,
    message || `Expected ${v1} to be greater than or equal to ${v1}`
  );
}

const assert_less_than_equal = (v1, v2, message) => {
  assert(
    v1 <= v2,
    message || `Expected ${v1} to be greater than or equal to ${v1}`
  );
}

const assert_greater_than = (v1, v2, message) => {
  assert(
    v1 > v2,
    message || `Expected ${v1} to be greater than or equal to ${v1}`
  );
}

const assert_greater_than_equal = (v1, v2, message) => {
  assert(
    v1 >= v2,
    message || `Expected ${v1} to be greater than or equal to ${v1}`
  );
}

const test = (f, desc) => {
  try {
    f();
  }
  catch (e) {
    throw new Error(`Test ${desc} failed with ${e}`);
  }
}

const promise_test = async (f, desc) => {
  try {
    await f();
  }
  catch (e) {
    throw new Error(`Test ${desc} failed with ${e}`);
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const flushAsyncEvents = () => delay(0).then(() => delay(0)).then(() => delay(0)).then(() => delay(0));

export {
  assert,
  assert_array_equals,
  assert_equals,
  assert_not_equals,
  assert_greater_than,
  assert_greater_than_equal,
  assert_less_than,
  assert_less_than_equal,
  assert_false,
  assert_throws_js,
  assert_true,
  assert_unreached,
  delay,
  flushAsyncEvents,
  promise_test,
  test,
};