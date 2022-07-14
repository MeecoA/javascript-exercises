const repeatString = function(string, num) {

    var repeatStr = "";

    while (num>0){
        repeatStr=repeatStr+string; 
        num--; 
    }
    return repeatStr; 
    
}
// Do not edit below this line
module.exports = repeatString;
