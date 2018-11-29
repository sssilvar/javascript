const person = {
    name: 'James',
    age: 29,
    greet() {
        console.log('Hi I am ' + this.name)
    }
};

// Function to print only name
const printName = (personObj) => {
    console.log(personObj.name);
}
const printNameB = ({ name }) => {
    console.log(name);
}

printName(person);
printNameB(person);

const { name, age } = person;
console.log(name, age)