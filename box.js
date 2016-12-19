// Box : ()->Box(())
module.exports = function Box(val) {
  return {
    of: function(val) {
      return Box(val);
    },
    chain: function(fn) {
      return fn(val);
    },
    map: function(fn) {
      return Box(fn(val));
    },
    fold: function(fn) {
      return fn(val);
    },
    inspect: 'Box(' + val + ')'
  };
};
