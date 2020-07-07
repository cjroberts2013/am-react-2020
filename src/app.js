

class Person {
    constructor(name = 'Anonymous') {
        this.name = name
    }
    getGreeting() {
        return `Hello ${this.name}`
    }
}

const me = new Person('CJ Roberts');
console.log(me.getGreeting())