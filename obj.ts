let onecodecamp:object;
onecodecamp = {name:'one code camp',age:2024,month:'february',skills:["javascript","npm","nodejs","mongodb"]}
console.log(onecodecamp)

//combine way to declare an objects
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};


//the empty type
let vacant: {};
// vacant.firstName = 'John'; error
interface Person4 {
    firstName: string;
    lastName: string;
}

function getFullName(person:Person4){
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


//interface awith constructor function typescript
interface Person{
    ssn:number;
    name:string;
    inOnline:boolean;
}

function createPerson(_ssn: number, _name: string, _isOnline: boolean): Person {
    return {
        ssn: _ssn,
        name: _name,
        inOnline: _isOnline,
    };
}
const persona1:Person = createPerson(14.121161,'jose pedro',true)


class Person2 {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Example usage
const person1 = new Person2('123-45-6789', 'John', 'Doe');
console.log(person1);
