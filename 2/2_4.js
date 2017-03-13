"use strict";

var user = {
  name:"Valera",
}

function getName(){
  return this.name;
}

Function.prototype.myBind = function(bObject ){
  var myBind = this;
  return function(){
    bObject.secret = myBind;
    return bObject.secret();
  }
}

console.log(getName.myBind(user)());

