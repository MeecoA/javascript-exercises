const add = function(num1,num2) {
  total = 0; 
  total = num1 + num2; 

  return total; 
	
};

const subtract = function(num1,num2) {
  total = 0; 
  total = num1 - num2; 

  return total; 
	
};

const sum = function(array) {

  total = 0; 
for (let i = 0; i < array.length; i++){
  total += array[i]; 
}
  return total; 
	
};

const multiply = function(array) {
  total = 1; 
  for (let i = 0; i < array.length; i++){
    total *= array[i]; 
  }
    return total; 

};
const power = function(num1, num2) {
	result = Math.pow(num1,num2) ;
  return result;
};
const factorial = function(num) {

  let result = num; 
  if (num == 1 || num ==0 ){
    return 1; 
  }
  while (num > 1){
    num--; 
    result *= num; 
  }
  return result; 
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
