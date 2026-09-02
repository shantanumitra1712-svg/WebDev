// Objects

const username = {
  "first Name": "Shantanu",
  isLoggedin: true,
}

// const myfirstName = "shantanu"
// myfirstName = "Raj"

// console.log(myfirstName) it will give

username.firstName = "Raj"
console.log(username.firstName)

console.log(username["first Name"])

username.lastName = "Kapoor"
console.log(username.lastName)

console.log(username)

// console.log(typeof username)

let taoday = new Date()
// console.log(taoday.getDate())

// Array

// let heros = ["a","b","c",true]
let anotherUser = ["Shantanu", "Mitra", true]

// console.log(anotherUser[1])

// console.log(1 + "1")
console.log("1" + 1)

// let isValue = true
// console.log(isValue + 1)

let isValue = "2abc"
// console.log(Number(isValue)) // Output will be NaN
console.log(typeof Number(isValue))
