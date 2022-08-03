const palindromes = function (str) {
    let regEx = /[\W_]/g; 

    let lowRegStr = str.toLowerCase().replace(regEx,'');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
 
 
 
    return reverseStr === lowRegStr; 
   

};

// Do not edit below this line
module.exports = palindromes;
