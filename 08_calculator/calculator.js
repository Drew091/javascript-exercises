const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(sum) {
	return sum.reduce((a, b) => a + b, 0);
};

const multiply = function(multiply) {
	return multiply.reduce((a, b) => a * b, 1);
};

const power = function(a,b) {
 return Math.pow(a,b);
};

const factorial = function(a) {
	let result = 1;
	for(let i=1; Math.abs(a)>=i; i++){
		result = result*i;
	}

	return a < 0  ? result * -1 : result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
