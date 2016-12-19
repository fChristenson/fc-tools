module.exports = function LazyBox(fn) {
  return {
    of: function(fn) {
      return LazyBox(fn);
    },
    chain: function(cb) {
      return cb(fn());
    },
    map: function(cb) {
      return LazyBox(function() {
        return cb(fn());
      });
    },
    fold: function(cb) {
      return cb(fn());
    },
    inspect: 'LazyBox(' + fn + ')'
  };
};
