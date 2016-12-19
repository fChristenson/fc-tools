// Box : ()->Box(())
function Box(val) {
  return {
    ap: function(box) {
      return box.map(val);
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
}

Box.of = function(val) {
  return Box(val);
};

module.exports = Box;
