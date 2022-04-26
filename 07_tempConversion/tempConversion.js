const ftoc = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  return parseFloat((Math.round(celsius * 10) / 10).toFixed(1));
};

const ctof = function (temp) {
  let fahr = (temp * 9) / 5 + 32;
  return parseFloat((Math.round(fahr * 10) / 10).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
