const add = function (...args) {
  return args.reduce(
    (total, number) => {
      total = total + number;
      return total;
    },

    0
  );
};

const subtract = function (...args) {
  return args.reduce(
    (total, number) => {
      total = total - number;
      return total;
    },

    args[0] * 2
  );
};

const sum = function (a) {
  return a.reduce(
    (total, number) => {
      total = total + number;
      return total;
    },

    0
  );
};

const multiply = function (a) {
  return a.reduce(
    (total, number) => {
      total = total * number;
      return total;
    },

    1
  );
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }

  return result;
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
