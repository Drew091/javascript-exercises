const removeFromArray = function(...moreArg) {
 let array = moreArg[0];
 let arraytest = moreArg[0];
 const arrayMore = [];
  let result = [];
  for (let j = 1; j < moreArg.length; j++){
    for (let i = 0; i < array.length; i++){

      if(array[i] === moreArg[j]){
        //result.push(array[i]);
        array.splice(i,1);
      }
    }
  }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
