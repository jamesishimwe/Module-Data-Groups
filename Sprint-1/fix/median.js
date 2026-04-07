// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;
  
  const numbers = list.filter(val => typeof val === 'number');
  if (numbers.length === 0) return null;
  numbers.sort((a, b) => a - b);
  
  if (numbers.length % 2 === 0) {
    const mid1 = numbers[numbers.length / 2 - 1];
    const mid2 = numbers[numbers.length / 2];
    return (mid1 + mid2) / 2;
  }
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;
