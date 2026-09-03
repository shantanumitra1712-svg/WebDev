/*
1. Declare an array named `teaFlavours` that contains the strings  `"green tea"`, 
`"black tea"`, `"oolong tea"`.
Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"]

// let teaFl = new Array() -> also a way to declare an array
const firstTea = teaFlavours[0]

/*
2. Declare an array named `cities` containing "London, "tokoyo", "Paris", and 
"New York".
Access the third element in the array and store it in a variable named `favoriteCity`
*/

let cities = ["London", "Tokoyo", "Paris", "New York"]
const favoriteCity = cities[2]
// console.log(favoriteCity)

/*
3. You have an array `teaTypes` containing `"herbal tea"`, `"White tea"`, `"masala chai"`.
change the second element of the array to `"Jasmine tea"`.
*/

let teaTypes = ["Herbal tea", "White tea", "Masala tea"]
teaTypes[1] = "Jasmine tea"
// console.log(teaTypes)

/*
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`
Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"]
// citiesVisited[2] = "Berlin"
citiesVisited.push("Berlin")
// console.log(citiesVisited)

/*
5. You have an array named `teaOrders` with `"Chai"`, `"iced tea"`, `"matcha"`,
and `"earl grey"`.
Remove the last element of the array using the pop method and store it in a variable 
named `lastOrder`.
*/

let teaOrders = ["Chai", "Iced tea", "Matcha", "Earl grey"]
let lastOrder = teaOrders.pop()
// console.log(lastOrder)

/*
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"` and
`"chai"`.
Create a soft copy  of this array named `softCopyteas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyteas = popularTeas
popularTeas.pop()
// console.log(softCopyteas)
// console.log(popularTeas)

/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and 
`"New York"`. 
Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"]
hardCopyCities = [...topCities]
// let hardCopyCities = topCities.slice()
topCities.pop()
// console.log(hardCopyCities)
// console.log(topCities)

/*
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and 
`asianCities` containing `"Tokoyo"` and `"Bangkok"`.
Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokoyo", "Bangkok"]

// let worldCities = europeanCities + "," + asianCities
// console.log(typeof worldCities) it is a string

// let worldCities = [europeanCities, asianCities]
let worldCities = europeanCities.concat(asianCities)
// console.log(worldCities)

/*
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, 
`"green tea"` and `"earl grey"`.
Find length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length
// console.log(menuLength)

/*
10. You have an array named `cityBucketList` contanining `"koyoto"`, ``"London", 
`"Cape town"` and `"Vancouver"`.
Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Koyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucketList.includes("London")
