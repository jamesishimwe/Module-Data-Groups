function tally(array) {
  const tally = {};
  if (!Array.isArray(array)) throw new TypeError("Expected an array");
  if (array.length === 0) return tally;
  for (const item of array) {
    tally[item] = (tally[item] || 0) + 1;
  }
  return tally;
}

module.exports = tally;
