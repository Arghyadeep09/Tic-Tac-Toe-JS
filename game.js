let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let message=document.querySelector(".msg");

let turnX =true; //playerX,playerO
let count=0;//to check for draw

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;

        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;//so the the box which is once clicked cannot change its value on second click
        count++;

        let iswinner=checkWinner();

        if(count===9 &&!iswinner){
            showDraw();
        }
    })
});

function showDraw(){
    message.innerHTML="There is a tie";
    message.classList.remove("hide");
    disableBoxes();
}
function showWinner(winner){
    message.innerHTML=` The Winner is ${winner}`;
    disableBoxes();
}
function checkWinner(){
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
                
            }
        }
    }
}

function disableBoxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}

function enableBoxes(){
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
function resetGame(){
    turnX=true;
    enableBoxes();
    message.classList.add("hide");
}

resetbtn.addEventListener("click",resetGame);