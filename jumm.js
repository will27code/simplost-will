var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gridSize = 17;
var cellSize = canvas.width / gridSize;

var snakeX = 8;
var snakeY = 8;

var snakeDirection = "right";
//le  snake length  est a combien  de cube  ont veut que le snake ai au  debut de  la game 

var  snakeLength = 1;

//food
var foodX = Math.floor(Math.random() * gridSize);
var foodY = Math.floor(Math.random() * gridSize);

//food

var interval = setInterval(gameLoop, 100);

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "a":
            snakeDirection = "left";
            break;
        case "d":
            snakeDirection = "right";
            break;
        case "w":
            snakeDirection = "up";
            break;
        case "s":
            snakeDirection = "down";
            break;

    }
}) ;
 
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            snakeDirection = "left";
            break;
        case "ArrowRight":
            snakeDirection = "right";
            break;
        case "ArrowUp":
            snakeDirection = "up";
            break;
        case "ArrowDown":
            snakeDirection = "down";
            break;

    }
}) ;
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "SwipeLeft":
            snakeDirection = "left";
            break;
        case "SwipeRight":
            snakeDirection = "right";
            break;
        case "SwipeUp":
            snakeDirection = "up";
            break;
        case "SwipeDown":
            snakeDirection = "down";
            break;

    }
}) ;


function gameLoop() {
     switch(snakeDirection)  {
              case "left":
              snakeX  -= 1;
              break;
              case "right":
                snakeX += 1;
                break;
                case "up":
                    snakeY -= 1;
                    break;
                    case "down":
                        snakeY += 1;
                        break;
 }
 if (snakeX < 0|| snakeX >= gridSize || snakeY < 0|| snakeY >= gridSize) {
    clearInterval(interval);
    alert("GAME OVER!!! thanks for playing");
    return;
}

    if (snakeX == foodX && snakeY == foodY ) {
        snakeLength++;
        foodX = Math.floor(Math.random() * gridSize);
        foodY = Math.floor(Math.random() * gridSize);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(foodX * cellSize, foodY * cellSize, cellSize, cellSize);


    ctx.fillStyle = "red";
     for (var i = 0; i < snakeLength; i++) {
        ctx.fillRect((snakeX - i) * cellSize, snakeY * cellSize, cellSize, cellSize);
    }
}

const scoreElement = document.getElementById("score");

let score = 0;

function increaseScore() {
  score++;
  scoreElement.textContent = score;
}

// Example usage:
increaseScore(1); // Increases the score by 1 and updates the scoreboard
