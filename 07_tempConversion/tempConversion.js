const ftoc = function(num) {

return Math.round( ((num -32) * 5/9) * 10)/10;

};

const ctof = function(num) {
  return Math.round( ((num * 1.8) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
