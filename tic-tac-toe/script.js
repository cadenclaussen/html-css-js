var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerX;
var gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement('div');
            tile.id = r.toString() +  '-' + c.toString();
            tile.classList.add('tile');
            if (r == 0 || r == 1) {
                tile.classList.add('horizontal-line');
            }
            if (c == 0 || c == 1) {
                tile.classList.add('vertical-line');
            }
            tile.addEventListener('click', setTile);
            document.getElementById('board').append(tile);
        }
    }
}


function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-")
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') {
        return;
    }

    board[r][c] = currPlayer;
    this.innerText = currPlayer;

    if (currPlayer == playerO) {
        currPlayer = playerX;
    }
    else {
        currPlayer = playerO;
    }

    isGameOver();
}

function isGameOver() {
    for (let r = 0; r < 2; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] !==  ' ') {
            gameOver = true;
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + '-' + i.toString());
                tile.classList.add('winner');
            }
            return;
        }
    }

    for (let c = 0; c < 2; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] !== ' ') {
            gameOver = true;
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + '-' + c.toString());
                tile.classList.add('winner');
            }
            return;
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] !== ' ') {
        gameOver = true;
        let tile;
        tile = document.getElementById('0-0');
        tile.classList.add('winner');
        tile = document.getElementById('1-1');
        tile.classList.add('winner');
        tile = document.getElementById('2-2');
        tile.classList.add('winner');
        return;
    }

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] !== ' ') {
        gameOver = true;
        let tile;
        tile = document.getElementById('0-2');
        tile.classList.add('winner');
        tile = document.getElementById('1-1');
        tile.classList.add('winner');
        tile = document.getElementById('2-0');
        tile.classList.add('winner');
        return;
    }
}