let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let NewB = document.querySelector("#new-btn");
let msgCon = document.querySelector(".msgCon");
let msg = document.querySelector("#msg");

let turnO = true;
const winning_patterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

let resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgCon.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("button was clicked!..");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

let disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let showWinner = (winner) =>{
    msg.innerText = 'Congratulations, Winner is ' + winner;
    msgCon.classList.remove("hide");
    disabledBoxes();
}

let enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkwinner = () => {
    for(let pattern of winning_patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
};


NewB.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
