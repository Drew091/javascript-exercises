const repeatString = function(string, num) {
  let stringRepeat = "";
  if(num >= 0){
    for (let i=0; i < num; i++){
      stringRepeat = stringRepeat + string;
    }
    return stringRepeat;
  }else{
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
