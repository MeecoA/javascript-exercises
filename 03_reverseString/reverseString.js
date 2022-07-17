const reverseString = function(string) {

    let reversedStr =""; //create an empty string
    for(let i = string.length-1; i>=0;i--){//getting the length - 1 ex : the string hello will get it's length -1 
                                            //that is the start of the initialization. condition is i > = 0, 
                                            //and adding the string index to the empty string
                                            // decrement the i at the end. 
                                            // loop: string "hello"  - first length -1 = 5 -1 = 4  - 4th index is letter o; 

        reversedStr = reversedStr+string[i]; 
    }

    return reversedStr;  // returns the reversed string. 

};

// Do not edit below this line
module.exports = reverseString;
