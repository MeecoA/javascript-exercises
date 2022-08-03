const findTheOldest = function(array) {

    return array.reduce((oldest, currentPerson)=>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); 
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); 
        return oldestAge < currentAge ? currentPerson : oldestAge; 
    })

};

// Do not edit below this line
module.exports = findTheOldest;
