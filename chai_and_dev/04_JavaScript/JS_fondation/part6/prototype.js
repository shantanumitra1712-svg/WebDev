let computer = {
  cpu: 12,
  ram: 16
}
let lenevo = {
  screen: "HD",
  __proto__: computer,
}
let tomHardware = {}

// console.log(`lenevo`, lenevo.__proto__)

let genericCar = { tyres: 4 }

let tesla = {
  driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`, Object.getPrototypeOf(tesla));

