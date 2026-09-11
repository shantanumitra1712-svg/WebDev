// alert("connected");

/*
Dom manipulation
1. get the element 
2. event listening

querySelector : # (for id), .(for classes)
*/

// Example 1

// let hold = document.getElementById("changeTextButton");

// hold.addEventListener("click", () => {
//     console.log(this);

// });

document.getElementById("changeTextButton").
    addEventListener("click", function () {
        let paragraph = document.getElementById("myParagraph");
        // paragraph.textContent = "the paragraph is changed"
        console.log(paragraph);

    })