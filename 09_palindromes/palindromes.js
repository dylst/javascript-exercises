const palindromes = function (str) {
  const check = str
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replaceAll(" ", "");
  if (check.length < 1) return true;
  if (check.slice(0, 1) !== check.slice(-1)) return false;
  return palindromes(check.slice(1, -1));
};

// Do not edit below this line
module.exports = palindromes;
