const fibonacci = function(number) {
  var resultOne = 1;
  var resultTwo = 0;

if(number>0){
  for (let i = 0; i < number; i++){
      resultTwo = resultOne + resultTwo;
      resultOne = resultTwo - resultOne;
  }
  return resultTwo;
}else{
  return "OOPS";
}
};

// Do not edit below this line
module.exports = fibonacci;
