const leapYears = function(yr) {

    isLeap = false; 

    if (yr % 100 == 0 && yr % 400 == 0){
     isLeap = true; 
   }
   else if(yr % 100 == 0)
   {
     isLeap = false; 
   } 
   else if(yr % 4 == 0){
     isLeap = true; 
   }
  
   return isLeap; 

};

// Do not edit below this line
module.exports = leapYears;
