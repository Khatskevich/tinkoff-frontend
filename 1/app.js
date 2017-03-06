(function(){
    var sortLetters = function(str){
      return str.split("").sort().join();
    }
    var first = prompt("Type first string");
    var second = prompt("Type second string");
    if (sortLetters(first) == sortLetters(second)){
      alert("Annagramm");
    }else{
      alert("Not annagramm");
    }
 })();

