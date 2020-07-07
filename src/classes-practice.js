
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name,
            this.age = age
    }
    getGreeting() {
        return `Hello, I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` ${this.name.split(' ')[0]} is majoring in ${this.major}.`;
        }

        return description
    }
}

const me = new Student('CJ Roberts', 25, 'Biochemistry');
const anon = new Student();

// console.log(me.getDescription());
// console.log(anon.getDescription());


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

const cj = new Traveler('CJ Roberts', 25, 'Texas');
const noone = new Traveler();

console.log(cj.getGreeting());
console.log(noone.getGreeting());