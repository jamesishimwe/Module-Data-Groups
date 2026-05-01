// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
/*
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//The target return value is { "1": "a", "2": "b" }.

// c) What does Object.entries return? Why is it needed in this program?
//It returns An array of the object's own property [key, value] pairs.
// It allows the for...of loop to easily access both the key and the value at the same time during each iteration.

// d) Explain why the current return value is different from the target output
//Using invertedObj.key creates a literal property named "key" on the object. 
// To use the value inside the key variable, you must use bracket notation: invertedObj[key].
//The function is setting the original value to the key. 
// To actually "invert" the object, it needs to swap them: invertedObj[value] = key;.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
*/
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}