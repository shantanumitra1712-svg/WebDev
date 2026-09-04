/* 
1. Write a `while` loop that calculates the sum of all numbers 
from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0
let i = 1

while (i <= 5) {
  sum += i
  i++
}

// console.log(sum)

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores 
the numbers in an array named `countdown`.
*/

// let num = 5

// while (num > 0) {
//   let countdown = num
//   console.log(`countdown = ${countdown}`)
//   num--
// }

let countdown = []
let j = 5

while (j > 0) {
  countdown.push(j)
  j--
}

// console.log(countdown)

/* 
3. Write a `do while` loop that prompts a user to enter their favorite 
tea type until they enter `"stop"`. 
Store each tea type in an array named `teaCollection`.
*/

let teaCollection = []
let tea

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finsih) : `)
//   if (tea !== "stop") {
//     teaCollection.push(tea)
//   }
// } while (tea !== "stop")

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the 
result in a variable named `total`.
*/

let total = 0
let k = 1
do {
  total += k
  k++
} while (k <= 3)

console.log(total)

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` 
by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = []
let numbers = [2, 4, 6]

for (let l = 0; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2)
}

console.log(multipliedNumbers)

/* 
6. Write a `for` loop that lists all the cities in the array 
`["Paris", "New York", "Tokyo", "London"]` and stores each city 
in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c]
  //   cityList.push(myCity)
  cityList.unshift(myCity)
}

console.log(cities.reverse())
console.log(cityList)
