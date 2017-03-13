"use strict";
function sum(val){
  if (val == null){
    return val;
  }
  var result = val;
  function recursiveSum(val){
    if (val == null){
      return result;
    }
    result += val;
    return recursiveSum;
  }
  return recursiveSum;
}

console.log(sum(6)(2)(3)());

