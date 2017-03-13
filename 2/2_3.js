"use strict";
function unfoldArrays(arrays){
  return arrays.reduce( function(result, current){
      return result.concat(current);
    }, []);
}

console.log(unfoldArrays([[1,2], [3,4,5], [6]] ));

