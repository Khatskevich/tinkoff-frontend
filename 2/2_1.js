"use strict";
function toBinaryString(val){
  function recursiveToBinaryString(val, currentString){
    var nextSymbol;
    currentString = currentString || "";
    if (val === 1){
      return "1" + currentString;
    }else if (val === 0){
      return currentString;
    }
    nextSymbol = val % 2 === 1 ? "1" : 0;
    return recursiveToBinaryString(val >> 1, nextSymbol + currentString)
  }
  if (val === 0){
    return "0";
  }
  return recursiveToBinaryString(val);
}

console.log(toBinaryString(90));

