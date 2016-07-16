//map

Array.prototype._map = function(callback, thisArg) {
  let map = [];
  for (let index = 0; index < this.length; index++) {
    map.push(callback.call(thisArg, this[index], index, this));
  }
  return map;
};

//forEach

Array.prototype._forEach = function(callback, thisArg) {
  for (let index = 0; index < this.length; index++) {
    callback.call(thisArg, this[index], index, this);
  }
};

//find

Array.prototype._find = function(callback, thisArg) {
  for (let index = 0; index < this.length; index++) {
    const test = callback.call(thisArg, this[index], index, this);
    if (test === true) {
    	return this[index];
    }
  }
  return undefined;
};

//findIndex

Array.prototype._findIndex = function(callback, thisArg) {
  for (let index = 0; index < this.length; index++) {
    const test = callback.call(thisArg, this[index], index, this);
    if (test === true) {
      return index;
    }
  }
  return -1;
};

//filter

Array.prototype._filter = function(callback, thisArg) {
  let filteredArr = [];
  for (let index = 0; index < this.length; index++) {
    const test = callback.call(thisArg, this[index], index, this);
    if (test === true) {
      filteredArr.push(this[index]);
    }
  }
  return filteredArr;
};

//every

Array.prototype._every = function(callback, thisArg) {
  for (let index = 0; index < this.length; index++) {
    const test = callback.call(thisArg, this[index], index, this);
    if (test === false) {
      return false;
    }
  }
  return true;
};

//some


Array.prototype._some = function(callback, thisArg) {
  for (let index = 0; index < this.length; index++) {
    const test = callback.call(thisArg, this[index], index, this);
    if (test === true) {
      return true;
    }
  }
  return false;
};

//reduce

Array.prototype._reduce = function(callback, initialValue) {
  let accumulator = initialValue ? initialValue : this[index - 1];
  for (let index = initialValue ? 0 : 1; index < this.length; index++) {
    accumulator = callback.call(this, accumulator, this[index], index, this);
  }
  return accumulator;
};

//reduceRight

Array.prototype._reduceRight = function(callback, initialValue) {
  let accumulator = initialValue ? initialValue : this[this.length - 1];
  for (let index = initialValue ? this.length - 1 : this.length - 2; index >= 0; index--) {
  	accumulator = callback.call(this, accumulator, this[index], index, this);
  }
  return accumulator;
};
