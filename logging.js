var util = require('util');

// inspect : a->a
var inspect = function(val) {
  console.log(util.inspect(val, false, Infinity));
  console.log('----------------------');
  return val;
};

// log : a->a
var log = function(val) {
  console.log(val);
  console.log('----------------------');
  return val;
};

module.exports = {
  inspect: inspect,
  log: log
};
