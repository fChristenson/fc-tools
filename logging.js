var util = require('util');
var _ = require('lodash');

// inspect : a->b->b
var labelInspect = _.curry(function(label, val) {
  console.log(label);
  console.log('');

  console.log(util.inspect(val, false, Infinity));
  console.log('----------------------');
  
  return val;
});

// log : a->b->b
var labelLog = _.curry(function(label, val) {
  console.log(label);
  console.log('');

  console.log(val);
  console.log('----------------------');
  
  return val;
});

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
  log: log,
  labelInspect: labelInspect,
  labelLog: labelLog
};
