// a->a
function valToVal(val) {
  return val;
}

// a->[]
function valToEmptyArray() {
  return [];
}

// a->[a]
function valToArrayWithVal(val) {
  return [val];
}

// a->String
function valToEmptyString() {
  return '';
}

// a->{}
function valToEmptyObject() {
  return {};
}

// a->Bool
function valToTrue() {
  return true;
}

// a->Bool
function valToFalse() {
  return false;
}

module.exports = {
  valToVal: valToVal,
  valToEmptyArray: valToEmptyArray,
  valToEmptyString: valToEmptyString,
  valToEmptyObject: valToEmptyObject,
  valToTrue: valToTrue,
  valToFalse: valToFalse,
  valToArrayWithVal: valToArrayWithVal
};
