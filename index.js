console.log('Hello from Node.js')

const { person } = require('./person')

console.log(person.name)

const { Person } = require('./person')

const person1 = new Person('Victor', 38);

person1.greeting();


