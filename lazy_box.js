// LazyBox : ()->LazyBox(())
function LazyBox(fn) {
  return {
    ap: function(box) {
      return box.map(fn);
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
}

LazyBox.of = function(fn) {
  return LazyBox(fn);
};

module.exports = LazyBox;
