const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  const fib = [1, 1];
  for (let i = 0; i < num; i++) {
    const num = fib[i] + fib[i + 1];
    fib.push(num);
  }
  return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
