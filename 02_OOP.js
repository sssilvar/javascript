const person = {
    name: 'James',
    age: 29,
    greet() {
        console.log('Hi I am ' + this.name)
    }
};

person.greet();

// Array Methods
const hobbies = [
    'Sports',
    'Cooking',
    1,
    true,
    person
];

console.log('\n[  INFO  ] Iterating over array...')
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log('\nMapped array:\n' + hobbies.map(hobby => 'Hobby: ' + hobby));
console.log('\nOriginal array:\n' + hobbies);

// You can edit const arrays
hobbies.push('Programming')
console.log('\nUpdated Hibbies (pushed):\n' + hobbies);


// Create an extended version of hobbies (concatenating)
const copiedHobbies = hobbies.slice();  // You can pass arguments to slice defining the number of elements
const copiedHobbiesB = [...hobbies];  // Another way
console.log(copiedHobbies);
console.log(copiedHobbiesB);

const coppiedPerson = {...person};
console.log(coppiedPerson);

// Using it in functions to receive multiple arguments
const toArray = (...args) => {
    return args
}

console.log(toArray(1,2,3,4,5,6))