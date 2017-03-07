(function(){
    var sortLetters = function(str){
      return str.toLowerCase().split("").sort().join();
    }
    var first = prompt("Type first string");
    var second = prompt("Type second string");
    var result = sortLetters(first) == sortLetters(second) ? "Annagramm" : "Not annagramm"
    alert(result);
 })();

