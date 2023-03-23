const palindromes = function (sentence) {
var sentenceArray = sentence.split('');
var letters = /^[A-Za-z]+$/;
var palindromeArray = [];
var sentenceArrayOnlyLetters = [];

for (let i = 0; i < sentenceArray.length; i++){
  if (sentenceArray[i].match(letters)){
    sentenceArrayOnlyLetters.push(sentenceArray[i]);
  }
}

for (let i = sentenceArrayOnlyLetters.length-1; i > -1; i--){
  if (sentenceArrayOnlyLetters[i].match(letters)){
  palindromeArray.push(sentenceArrayOnlyLetters[i]);
  }
}

var firstArray = sentenceArrayOnlyLetters.toString().toLowerCase();
var secondArray =palindromeArray.toString().toLowerCase();
return firstArray == secondArray;
console.log(palindromeArray);
console.log(sentenceArrayOnlyLetters);
};

// Do not edit below this line
module.exports = palindromes;
