function outer() {
    let count = 4;
    console.log("Counting number ");

    return function () {
        count++;
        return count;
    }
}

let increment = outer()
console.log(increment()); //count =5 
console.log(increment()); //count =6
console.log(increment()); // count =7
