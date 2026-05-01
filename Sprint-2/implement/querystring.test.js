// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});
test("parses simple key-value pairs", () => {
  expect(parseQueryString("name=alice&age=25")).toEqual({
    "name": "alice",
    "age": "25",
  });
});
test("strips leading question marks", () => {
  expect(parseQueryString("?user=bob&status=active")).toEqual({
    "user": "bob",
    "status": "active",
  });
});
test("returns empty object for empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

test("returns empty object for null or undefined", () => {
  expect(parseQueryString(null)).toEqual({});
  expect(parseQueryString(undefined)).toEqual({});
});
