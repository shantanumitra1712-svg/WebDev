/*
having pause 
    1. network calls
    2. read/write files
    3. time fn
    4. userInput
    5. etc
*/

console.log("Hello World");

function sayHello() {
    console.log("Hello! from shan");

}

setTimeout(() => {
    sayHello();
}, 2000);

for (i = 0; i < 10; i++) {
    console.log(i);

}