const fibonacci = function(num) {

    let newNum = parseInt(num); 

    let fib = [0,1]; 
    let result; 
  
    if (num == 1 ){
      return 1; 
    }
    
    if(num> 0)
    {
        for (i = 2; i<= newNum; i++){
            fib[i] = fib [i-2] +fib[i-1];     
             result = fib[i]; 
          }
          return result; 
    }
    else{
        return "OOPS"; 
    }
  
    

};

// Do not edit below this line
module.exports = fibonacci;
