const reverseString = function(string) {
  let stringArray = [];
  let stringReverse ="";
  for(let i=0; i < string.length; i++){
    stringArray.push(string.charAt(i));
  }

  for (let j=string.length-1; j >= 0; j--){
    stringReverse = stringReverse + stringArray[j];
  }
  return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
