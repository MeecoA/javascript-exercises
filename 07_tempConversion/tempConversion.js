const ftoc = function(tempF) {

  const conversion =   (tempF - 32) * 5/9 ; 
  
  const roundedConversion =  Math.round(conversion * 10) / 10 ; 

  return roundedConversion; 

};

const ctof = function(tempC) {
  const conversion =   (tempC*9/5)+ 32 ; 
  
  const roundedConversion =  Math.round(conversion * 10) / 10 ; 

  return roundedConversion; 

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
