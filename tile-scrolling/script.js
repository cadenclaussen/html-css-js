var board;
var context;
var SCROLLX = 0;
var SCROLLY = 0;

var playerX = 0;
var playerY = 0;

var boardSize = 7;

const canvas = document.getElementById('canvas');

canvas.width = 1000;
canvas.height = 1000;
const ctx = canvas.getContext('2d');


window.onload = function() {
    createBoard();
    displayPlayer();
    displayBoard();
}


function createBoard() {
    board = [[]]
    for (let i = 0; i < 1000; i++) {
        board[0].push("Bush")
    }

    for (let row = 1; row < 999; row++) {
        board.push([]);
        for (let col = 0; col < 1000; col++) {
            if (col == 0 || col == 999) {
                board[row].push("Bush")
            } else {
                board[row].push("Grass")
            }
        }
    }
    board.push([])
    for (let i = 0; i < 1000; i++) {
        board[999].push("Bush")
    }
    console.log(board);
}

function displayBoard() {
    for (let row = SCROLLX; row < 100 + SCROLLX; row++) {
        for (let col = SCROLLY; col < 100 + SCROLLY; col++) {
            if (board[row][col] === "Player")  {
                ctx.fillStyle="red";
                ctx.fillRect(row * boardSize, col * boardSize, boardSize, boardSize);
            }
            if (board[row][col] === "Bush")  {
                ctx.fillStyle="darkgreen";
                ctx.fillRect(row * boardSize, col * boardSize, boardSize, boardSize);
            }
            if (board[row][col] === "Grass")  {
                ctx.fillStyle="green";
                ctx.fillRect(row * boardSize, col * boardSize, boardSize, boardSize);
            }
        }
    }
}

function displayPlayer() {
    playerX = (100 + SCROLLX)/2 + 1
    playerY = (100 + SCROLLY)/2 - 1
    board[playerX][playerY] = "Player"

}