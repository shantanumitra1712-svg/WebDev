document.addEventListener('DOMContentLoaded', () => {

    let boxes = document.querySelectorAll(".box");
    const resetBtn = document.getElementById("reset-btn");

    let turnO = true //playerX, playerY

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            // console.log("box was clicked");
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            }
            else {
                box.innerHTML = "X";
                turnO = true;
            }

        })
    })

})