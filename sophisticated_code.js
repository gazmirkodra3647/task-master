/* sophisticated_code.js */

// This code is an implementation of a library for handling complex numbers in JavaScript.
// It provides various operations and functions for complex numbers.

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Add two complex numbers
  add(other) {
    const resultReal = this.real + other.real;
    const resultImaginary = this.imaginary + other.imaginary;
    return new ComplexNumber(resultReal, resultImaginary);
  }

  // Multiply two complex numbers
  multiply(other) {
    const resultReal = this.real * other.real - this.imaginary * other.imaginary;
    const resultImaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(resultReal, resultImaginary);
  }

  // Get the magnitude of a complex number
  magnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  // Get the conjugate of a complex number
  conjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  // Get the string representation of a complex number
  toString() {
    if (this.imaginary >= 0) {
      return `${this.real} + ${this.imaginary}i`;
    } else {
      return `${this.real} - ${-this.imaginary}i`;
    }
  }
}

const complex1 = new ComplexNumber(3, 4);
const complex2 = new ComplexNumber(-2, 1);

console.log(`Complex Number 1: ${complex1}`);
console.log(`Complex Number 2: ${complex2}`);

const sum = complex1.add(complex2);
console.log(`Sum: ${sum}`);

const product = complex1.multiply(complex2);
console.log(`Product: ${product}`);

const magnitude = complex1.magnitude();
console.log(`Magnitude of Complex Number 1: ${magnitude}`);

const conjugate = complex2.conjugate();
console.log(`Conjugate of Complex Number 2: ${conjugate}`);

// More functions and operations can be added to enhance the capabilities of this complex number library.