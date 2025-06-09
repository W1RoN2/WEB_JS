// utils.js

export function greet(name) {
    return `Привіт, ${name}!`;
  }
  
  export function add(a, b) {
    return a + b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
  
  export function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }
  