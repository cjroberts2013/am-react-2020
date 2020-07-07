
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name,
            this.age = age
    }
    getGreeting() {
        return `Hello ${this.name}`
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

console.log(me.getDescription());
console.log(anon.getDescription());