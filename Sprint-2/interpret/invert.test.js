const invert = require("./invert.js");
test("inverts a single key-value pair", () => {
  const input = { a: 1 };
  expect(invert(input)).toEqual({ 1: "a" });
});
test("inverts multiple key-value pairs", () => {
  const input = { a: 1, b: 2, c: 3 };
  const expected = { 1: "a", 2: "b", 3: "c" };

  expect(invert(input)).toEqual(expected);
});
test("returns empty object for empty input", () => {
  expect(invert({})).toEqual({});
});
test("overwrites keys when duplicate values exist", () => {
  const input = { a: 1, b: 1 };
  expect(invert(input)).toEqual({ 1: "b" });
});
test("turns boolean and null values into string keys", () => {
  const input = { a: true, b: null };
  const expected = { true: "a", null: "b" };

  expect(invert(input)).toEqual(expected);
});
