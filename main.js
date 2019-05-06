console.log("Hello World")
const apiAddress = 'localhost:3000'
//var vs let
console.log(x)
var x = 9
// console.log(y)
// let y = 8



//Primitives (Value Types)
// Number
let num = 7
// String
let str = 'Mark'
// Bool
let isCoding = true
// null
let nothing = null
// undefined
let undefinedVariable;

// Refrence Types (objectTypes)
// Object
let obj = {}
// Array
let arr = []
// Function
// NaN




let name = 'Mark'

//String Concatination
console.log('Hello ' + name)
//String Interpolation
console.log(`Hello ${name} I am ${15 + 15} years old`)


let user = {
    name: 'Mark',
    age: 31,
    isMarried: true,
    isDeveloper: true,
    children: ['William', 'Alexander'],
    pets: {
        dogs: ['Minnie'],
        cats: []
    }
}


//Dot Notation
console.log(`
Hello my name is ${user.name}, 
I am ${user.age} years old. 
I am ${ user.married ? 'married' : 'single'}
I have ${user.children.length} ${user.children.length > 1 ? "children" : "child"}
I have ${user.pets.dogs.length} dogs.
I have ${user.pets.cats.length} cats.
`)

// Bracket Notation
//console.log(user['name'])
// let main = 'name'
//the only way to access an object value using a variable is bracket notation
// console.log(user[main])


if (user.age > 20 && user.married && user.name != 'Jake') {
    console.log('Drink up me heartys yo ho')
}


if (user.children.length > 3 || user.pets.dogs.length > 3) {
    console.log('NO VACATIONS FOR YOU')
}
else if (user.children.length > 0) {
    console.log('Enjoy your trip to LegoLand')
}
else {
    console.log('Enjoy your trip to Hawaii')
}


let health = 100
switch (health) {
    case 0:
        console.log('You\'re dead')
        break
    case 30:
    case 40:
    case 50:
    case 60:
        console.log('You are nearly half-dead')
    case 70:
    case 80:
    case 90:
        console.log('Go to the hospital')
        break
    case 100:
        console.log('off on your adventure')
        break
    default:
        console.log("How did you get here?")
        break
}

function formalGreet(str) {
    let greet = 'Hello ' + str
    console.log(greet)
}


formalGreet('jim')
console.log(greet)
