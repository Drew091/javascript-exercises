const sumAll = function() {
  let result = 0;
  let minValue = 0;
  let maxValue = 0;

  if(arguments[0] < arguments[1]){
    minValue = arguments[0];
    maxValue = arguments[1];
  }else{
    minValue = arguments[1];
    maxValue = arguments[0];
  }

  if(minValue < 0 ||  typeof maxValue != "number" || typeof minValue != "number"){
    result = "ERROR";
  }else{
    for(let i = minValue; i <= maxValue; i++){
    result += i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
