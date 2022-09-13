const ftoc = function(deg) {
  let celcius = (deg - 32)*(5/9);
  return Math.round(celcius * 10) / 10;
};

const ctof = function(deg) {
  farenheight = deg * (9/5) + 32;
  return Math.round(farenheight * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
