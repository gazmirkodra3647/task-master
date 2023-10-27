/* advanced_calculator.js */

// This code implements a complex calculator with various mathematical functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Attempted to divide by zero.");
  }
}

function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function sin(angle) {
  return Math.sin(angle);
}

function cos(angle) {
  return Math.cos(angle);
}

function tan(angle) {
  return Math.tan(angle);
}

function log(base, x) {
  return Math.log(x) / Math.log(base);
}

function sqrt(x) {
  return Math.sqrt(x);
}

// ... more mathematical functions

// Example usage
let result = add(2, 3);
console.log(result); // Output: 5

result = power(2, 4);
console.log(result); // Output: 16

result = factorial(5);
console.log(result); // Output: 120

result = sin(Math.PI / 2);
console.log(result); // Output: 1