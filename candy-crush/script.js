var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;

var currTile;
var otherTile;


window.onload = function() {
    startGame()

    window.setInterval(function(){
        crushCandy();
        slideCandy();
    }, 100);
}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)];
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
}

function dragEnd() {
    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c - 1 && r == r2;
    let moveRight = c2 == c + 1 && r == r2;

    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (!isAdjacent) {
        return;
    }

    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    if (!checkValid()) {
        currTile.src = currImg;
        otherTile.src = otherImg;       
    }
}

function dragDrop() {
    otherTile = this;
}

function startGame() {
    for (let r=0; r<rows; r++) {
        let row = [];
        for (let c=0; c<columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}

function crushCandy() {
    crushFive();
    crushFour();
    crushThree();
}

function crushThree() {
    for (let r=0; r<rows; r++) {
        for (let c=0; c<columns-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];

            if (candy1.src == candy2.src && candy1.src == candy3.src && candy2.src == candy3.src) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 30
                document.getElementById("score").innerText = score;
            }
        }
    }

    for (let c=0; c<columns; c++) {
        for (let r=0; r<rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];

            if (candy1.src == candy2.src && candy1.src == candy3.src && candy2.src == candy3.src) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 30
                document.getElementById("score").innerText = score;
            }
        }
    }
}


function crushFour() {
    for (let r=0; r<rows; r++) {
        for (let c=0; c<columns-3; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];

            if (candy1.src == candy2.src && candy2.src == candy3.src && candy4.src == candy3.src) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                score += 40
                document.getElementById("score").innerText = score;
            }
        }
    }

    for (let c=0; c<columns; c++) {
        for (let r=0; r<rows-3; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];

            if (candy1.src == candy2.src && candy2.src == candy3.src && candy4.src == candy3.src) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                score += 40
                document.getElementById("score").innerText = score;
            }
        }
    }
}

function crushFive() {
    for (let r=0; r<rows; r++) {
        for (let c=0; c<columns-4; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];
            let candy5 = board[r][c+4];

            if (candy1.src == candy2.src && candy2.src == candy3.src && candy4.src == candy3.src && candy4.src == candy5.src) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score += 50;
                document.getElementById("score").innerText = score;
            }
        }
    }

    for (let c=0; c<columns; c++) {
        for (let r=0; r<rows-4; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];

            if (candy1.src == candy2.src && candy2.src == candy3.src && candy4.src == candy3.src && candy4.src == candy5.src) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score += 50
                document.getElementById("score").innerText = score;
            }
        }
    }
}

function checkValid() {
    for (let r=0; r<rows; r++) {
        for (let c=0; c<columns-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];

            if (candy1.src == candy2.src && candy1.src == candy3.src && candy2.src == candy3.src) {
                return true;
            }
        }
    }

    for (let c=0; c<columns; c++) {
        for (let r=0; r<rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];

            if (candy1.src == candy2.src && candy1.src == candy3.src && candy2.src == candy3.src) {
                return true;
            }
        }
    }
    return false;
}

function slideCandy() {
    for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < columns; c++) {
            if ((board[r + 1][c]).src.includes("blank")) {
                board[r + 1][c].src = board[r][c].src;
                board[r][c].src = "./images/blank.png";
            }
        }
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if ((board[r][c]).src.includes("blank")) {
                if (!(board[r - 1][c].src == board[r][c].src)) {
                    return false;
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if ((board[r][c]).src.includes("blank")) {
                board[r][c].src = "./images/" + randomCandy() + ".png";
            }
        }
    }

    return true;
}