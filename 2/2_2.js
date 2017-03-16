"use strict";

function getOverlap(a, b){
  var result = [];
  var tempObject = {}
  a.forEach(function(x){
    tempObject[x]=1;
  })
  b.forEach(function(x){
    if (tempObject[x]){
      result.push(x);
    }
  })
  return result;
}

console.log( getOverlap([1, 3, 5, 7, 9],[1, 2, 3, 4]));

