// alert("connected");

/*
Dom manipulation
1. get the element 
2. event listening

querySelector : # (for id), .(for classes)
*/

// Example 1

let hold = document.getElementById('changeTextButton').
    addEventListener('click', function () {
        console.log(this);

    })