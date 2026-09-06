let car = {
    make: "Toyota",
    model: "Camry",
    year: "2024",
    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
};
// console.log(car.start());

// Constructor
function Person(name, age) {
    this.name = name
    this.age = age
}

// Object 
let john = new Person("John Doe", 18)
// console.log(john);

function Animal(type) {
    this.type = type
}

// to add property in a constructor 
Animal.prototype.speak = function () {
    return `${this.type} make a sound`
}

Array.prototype.shan = function () {
    return `Custom method ${this}`
}

let myArray = [1, 2, 3,]
// console.log(myArray.shan());

let myNewArray = [1, 2, 3, 4, 5, 6]
// console.log(myNewArray.shan());

// Class 
class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

// Inheritance
class Car extends Vehicle {
    drive() {
        return `${this.make}: this is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation
class BankAccount {
    #balance = 0; // # will make the variable inaccessible outside the class
    deposite(amount) {
        this.#balance += amount
        return this.#balance
    }

    getBalance() {
        return `${this.#balance}$`
    }
}

let account = new BankAccount()
// console.log(account.#balance) not accessible outside the class 
// console.log(account.getBalance());

// Abstraction

class CoffeMachine {

    start() {
        // call DB
        // filter value
        return `Starting the machine...`
    }

    brewCoffe() {
        // complex calculation
        return `Brewing coffee`
    }

    pressStartButton() {
        let msg1 = this.start()
        let msg2 = this.brewCoffe()
        return `${msg1}\n${msg2}`
    }
}

let myMachine = new CoffeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
    fly() {
        return `Flying....`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log("\n", bird.fly());
// console.log(penguin.fly());

// Static method

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// let miniClac = new Calculator()
// console.log(miniClac.add(2, 3));

// console.log(Calculator.add(6, 8));

// Getters and setters

class Employee {

    #salary
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative")
        }
        this.name = name
        this.#salary = salary
    }

    get salary() {
        return `You are not allowed to see the salary`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary");
        }
        else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000)
console.log(emp.salary);
// emp.salary = -60000
