"use strict";

var user = {
  name:"Valera",
}

function getName(word){
  return this.name + " " + word;
}

Function.prototype.myBind = function(){
  var myBind = this;
  var args = [];
  var object;
  object = arguments[0];
  for( var i = 1; i< arguments.length; i++){
    args.push(arguments[i]);
  }
  return function ()
    {
      return myBind.apply(object, args);
    }
}

console.log(getName.myBind(user, "Хай")());

