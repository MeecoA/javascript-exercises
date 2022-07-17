const removeFromArray = function(...args) {
    
    
    const array = args[0]; 
    const newArray = []; 


    array.forEach((item) => { // for each is a function that goes through every item in an array. 
        if(!args.includes(item)){
            newArray.push(item); 
        }
    });
    return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
