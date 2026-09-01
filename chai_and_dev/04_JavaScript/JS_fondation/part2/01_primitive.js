/* types of datatype => 1. Primitive datatype
                            1.strings
                            2.boolean
                            3.Number
                            4.Null and undefined
                            5.Symbol
                        
                        2.Non-Primitive datatypes
                            1.Objects
                            2.Arrays 
                            3.Function
*/

// Number

let balance = 120
let anotherbalnace = new Number(120)

// console.log(typeof balance)

// console.log(anotherbalnace)
// console.log(anotherbalnace.valueOf())

// console.log(typeof anotherbalnace)

// boolean
let isActive = true
let isReallyActive = new Boolean(true) //Not recommended

// null and undefined

// let firstname
// console.log(firstname) //output will be ubdefined not null

let firstName = null
let lastName = undefined
// console.log(firstName)
// console.log(lastName)

// Strings

let myString = "hello"
let myString1 = "Hola"
let username = "shantanu"

let oldGreetMessage = myString + " " + "shan"
// console.log(oldGreetMessage)

let greetMessage = `Hello ${username} !`
// console.log(greetMessage)

let demoOne = `Value is ${2 * 9}`
// console.log(demoOne)

// Symbol => symbol is a primitive datatype which gives a unique value everytime when it is asssign to any variable
let sm1 = Symbol("shantanu")
let sm2 = Symbol("shantanu") // it is still unique , the only use of symbol is uniqueness

console.log(sm1 == sm2)

console.log(sm1)
