// Class 10 Exercises: Exceptions Part 1

// Code your divide function here:
function divide(numerator, denominator) {
  let quotent = numerator / denominator;
  if (denominator === 0) {
    throw Error('Attempted to divide by zero.');
  }
  return quotent;
}

console.log(divide(3, 12))