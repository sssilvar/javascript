var name = 'James';
const age = 45;
let hasHobbies = true;

const summarizeUserC = (userName, userAge, userHasHobbies) => {
    return ('Name is: ' + userName + 
    '. Age is ' + userAge + 
    '. Does user has hobbies? ' + userHasHobbies);
}

const summarizeUserB = function (userName, userAge, userHasHobbies) {
    return ('Name is: ' + userName + 
    '. Age is ' + userAge + 
    '. Does user has hobbies? ' + userHasHobbies);
}

function summarizeUser(userName, userAge, userHasHobbies) {
    return ('Name is: ' + userName + 
    '. Age is ' + userAge + 
    '. Does user has hobbies? ' + userHasHobbies);
}

console.log(summarizeUser(name, age, hasHobbies));
console.log(summarizeUserB(name, age, hasHobbies));
console.log(summarizeUserC(name, age, hasHobbies));  // New feature - widely used

// Shorter version for declaring function
const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log('32 + 65 = ' + add(32, 65));
console.log('20 added one is ' + addOne(20));
console.log('Random added: ' + addRandom());