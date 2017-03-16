"use strict";
function sum(val){
  if (val === undefined){
    return val;
  }
  var result = val;
  function recursiveSum(val){
    if (val === undefined){
      return result;
    }
    result += val;
    return recursiveSum;
  }
  return recursiveSum;
}

console.log(sum(6)(2)(3)());

