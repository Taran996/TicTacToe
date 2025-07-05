let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

box.forEach((b) => {
    b.addEventListener("click", () => {
        if(turnO) {                               //player 1
            b.innerText = "O";
            turnO = false;                      //next time it'll print X in box
        }
        else {                                    //player 2
            b.innerText = "X";
            turnO = true;
        }
        b.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let i of box) {
        i.disabled = true;
    }
};

const enableBoxes = () => {
    for(let i of box) {
        i.disabled = false;
        i.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);