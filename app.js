const gameBoard = document.querySelector("#gameboard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");

const width = 8;
let playerGo = "black";
playerDisplay.textContent = playerGo;

const startPices = [
    rook, knight, bishop, king, queen, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    "", "", "", "", "", "", "", "", 
    "", "", "", "", "", "", "", "", 
    "", "", "", "", "", "", "", "", 
    "", "", "", "", "", "", "", "", 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, king, queen, bishop, knight, rook,
]

function createBoard() {
    startPices.forEach((startPice, i) => {
       const square =  document.createElement('div');
       square.classList.add('square');
       square.innerHTML = startPice;
       square.firstChild?.setAttribute("draggable", true)
       square.setAttribute("square-id", i);

       const row = Math.floor((63 - i) / 8) + 1;

       if (row % 2 === 0) {
        square.classList.add(i % 2 === 0 ? "beige" : "brown")
       } else {
        square.classList.add(i % 2 === 0 ? "brown" : "beige")
       }

       if (i <= 15) {
        square.firstChild.firstChild.classList.add("black")
       }
       if (i >= 48) {
        square.firstChild.firstChild.classList.add("white")
       }

       gameBoard.append(square)
    })
}

createBoard();





const allSquares = document.querySelectorAll("#gameboard .square");


let startPosition
let draggedElement

function dragStart (e) {
    startPosition = e.target.parentNode.getAttribute("square-id")
    draggedElement = e.target
}

function dragOver (e) {
    e.preventDefault()
 }

 function dragDrop (e) {
    e.stopPropagation()
    const taken = e.target.classList.contains("piece")

    //e.target.parentNode.append(draggedElement)
    //e.target.remove()
    //e.target.append(draggedElement)
    changePlayer()
 }

function changePlayer () {
    playerGo = playerGo == "black" ? "white" : "balck"
    playerDisplay.textContent = playerGo;
}

allSquares.forEach((square) => {
    square.addEventListener("dragstart", dragStart)
    square.addEventListener("dragover", dragOver)
    square.addEventListener("drop", dragDrop)
}) 

function reverseIds () {
    document
}