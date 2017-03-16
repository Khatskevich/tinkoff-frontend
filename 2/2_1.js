"use strict";
function toBinaryString(val){
  function recursiveToBinaryString(val){
    if (val <= 1) return val + ""
    return recursiveToBinaryString(val >> 1 /*parseInt(number / 2)*/) +
        (val % 2 === 1 ? "1" : "0");
  }
  return recursiveToBinaryString(val);
}
console.log(toBinaryString(0));
console.log(toBinaryString(1));
console.log(toBinaryString(9));
console.log(toBinaryString(90));

