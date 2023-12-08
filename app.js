const gameBoard = document.querySelector("#gameboard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display")

const width = 8

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
       square.setAttribute("quare-id", i);

       const row = Math.floor((63 - i) / 8) + 1;

       if (row % 2 === 0) {
        square.classList.add(i % 2 === 0 ? "beige" : "brown")
       } else {
        square.classList.add(i % 2 === 0 ? "brown" : "beige")
       }

       square.innerHTML = startPice;
       gameBoard.append(square)
    })
}

createBoard()