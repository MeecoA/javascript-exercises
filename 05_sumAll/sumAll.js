const sumAll = function(min, max) {
    let sum = 0;// create a new var for the sum. 

    // the loop will look like this 
    // i   sum 
    // 1    0+1  = 1
    // 2    2+1  = 3
    // 3    3+3  = 6 
    // 4    6+4 = 10; 

    
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
