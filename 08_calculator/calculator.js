const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((accum, n) => accum + n, 0);
};

const multiply = function (nums) {
  return nums.reduce((accum, n) => accum * n, 1);
};

const power = function (base, n) {
  return Math.pow(base, n);
};

const factorial = function (num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
