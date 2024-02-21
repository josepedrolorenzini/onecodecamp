"use strict";
let onecodecamp;
onecodecamp = { name: 'one code camp', age: 2024, month: 'february', skills: ["javascript", "npm", "nodejs", "mongodb"] };
console.log(onecodecamp);
//combine way to declare an objects
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
//the empty type
let vacant;
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
let john = {
    firstName: 'jose',
    lastName: 'Lorenzini'
};
console.log(getFullName(john));
let person3 = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};
function createPerson(_ssn, _name, _isOnline) {
    return {
        ssn: _ssn,
        name: _name,
        inOnline: _isOnline,
    };
}
const persona1 = createPerson(14.121161, 'jose pedro', true);
class Person2 {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// Example usage
const person1 = new Person2('123-45-6789', 'John', 'Doe');
console.log(person1);
