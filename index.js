// console.log('Hello from Node.js')

// const { person } = require('./person')

// console.log(person.name)

// const { Person } = require('./person')

// const person1 = new Person('Victor', 38);

// person1.greeting();

const Logger = require('./logger')

const logger =  new Logger();

logger.on('message', (data) => console.log('Called Listener', data))

logger.log('Hello World')