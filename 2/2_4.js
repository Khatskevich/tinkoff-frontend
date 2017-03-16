"use strict";

var user = {
  name:"Valera",
}

function getName(word){
  return this.name + " " + word;
}

Function.prototype.myBind = function(){
  var myBind = this;
  var args = [].slice.call(arguments);
  var object = args.shift();
  return function ()
    {
      return myBind.apply(object, args);
    }
}

console.log(getName.myBind(user, "Хай")());
console.log(getName.bind(user, "Хай")());

