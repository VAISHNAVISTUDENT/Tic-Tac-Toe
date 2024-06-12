let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let heading = document.querySelector("h1");
let winPattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let one = boxes[pattern[0]].innerText;
        let two = boxes[pattern[1]].innerText;
        let three = boxes[pattern[2]].innerText;

        if (one !== "" && two !== "" && three !== "") {
            if (one === two && two === three) {
                if (one === "X") {
                    heading.innerText = "Player two is the winner";
                } else {
                    heading.innerText = "Player one is the winner";
                }
                disableAllBoxes();
                return;
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    heading.innerText = "TIC TAC TOE";
    turnO = true;
});
