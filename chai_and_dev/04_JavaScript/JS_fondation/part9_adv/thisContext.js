const person = {
    name: "Shantanu",
    greet() {
        console.log(`Hi, I am ${this.name}`);

    }
};

person.greet()

const greetFunction = person.greet // context is lost at this point
greetFunction()

const boundGreet = person.greet.bind({ name: "Jarvis" }) // binding context of the function
boundGreet();

// bind, call and apply