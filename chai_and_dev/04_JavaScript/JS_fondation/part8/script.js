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
        paragraph.textContent = "the paragraph is changed"
        // console.log(paragraph);

    })

// Example 2

/*
HTML -> markup language
DOM -> processed elements in document tree in memory
*/

document.getElementById("highlightFirstCity").
    addEventListener('click', function () {
        let citiesList = document.getElementById("citiesList");
        // console.log(citiesList); calls the whole ul
        // console.log(citiesList.firstElementChild) //calls the first element of ul
        // console.log(citiesList.firstElementChild.classList)
        citiesList.firstElementChild.classList.add('highlight')
    })

// Example 3

document.getElementById("changeOrder").
    addEventListener('click', function () {
        let coffeeType = document.getElementById("coffeeType")
        coffeeType.textContent = "Espresso"
        coffeeType.style.backgroundColor = "brown"
        coffeeType.style.padding = "5px"
    })

// Example 4 : creating an element 

document.getElementById("addNewItem").addEventListener('click', function () {

    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    document.getElementById("shoppingList").appendChild(newItem)
})

// Example 5 : remove an element 

document.getElementById("removeLastTask").
    addEventListener('click', function () {
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    })

// Example 6

document.getElementById("clickMeButton").addEventListener('dblclick', function () {
    alert("chaicode")
})

// Example 7 : Event Delegation

document.getElementById("teaList").addEventListener('click', function (event) {
    if (event.target && event.target.matches('.teaItem')) {
        alert("You Selected: " + event.target.textContent)
    }
})

// Example 8 : form handling

document.getElementById("feedbackForm").
    addEventListener('submit', function (event) {
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback);

        document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`

    })

// Example 9

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('domStatus').textContent = "DOM fully loaded"
});

// Example 10

document.getElementById("toggleHighlight").
    addEventListener('click', function () {
        let descriptionText = document.getElementById("descriptionText")
        descriptionText.classList.toggle('highlight')
    })