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
    // could be replaced with
    // if (val <= 1 ) return (val===1? "1" : "") + currentString
    // it seems ugly!
    return recursiveToBinaryString(val >> 1 /*parseInt(number / 2)*/,
        (val % 2 === 1 ? "1" : "0") + currentString)
  }
  if (val === 0){
    return "0";
  }
  return recursiveToBinaryString(val);
}

console.log(toBinaryString(90));

