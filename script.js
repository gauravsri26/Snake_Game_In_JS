const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");
const blockHeight = 30;
const blockWidth = 30;
const columns = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
const blocks = [];
const highScoreElement = document.querySelector("#high-score");
const currentScoreElement = document.querySelector("#score")
const timeElement = document.querySelector("#time");

let highScore = localStorage.getItem("highScore") || 0;
highScoreElement.innerText = highScore;
let currentScore = 0;
let time = `00-00`; 

let snake = [
  {
    x: 3,
    y: 9,
  },
];

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * columns),
};
let direction = "right";
let intervalID = null;
let timerIntervalId = null;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

function renderSnake() {
  let head = null;

  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = {
      x: snake[0].x,
      y: snake[0].y - 1,
    };
  } else if (direction === "right") {
    head = {
      x: snake[0].x,
      y: snake[0].y + 1,
    };
  } else if (direction === "down") {
    head = {
      x: snake[0].x + 1,
      y: snake[0].y,
    };
  } else if (direction === "up") {
    head = {
      x: snake[0].x - 1,
      y: snake[0].y,
    };
  }

  if (head.x < 0 || head.x > rows || head.y < 0 || head.y > columns) {
    clearInterval(intervalID);
    clearInterval(timerIntervalId);
    modal.style.display = "flex";
    startGameModal.style.display = "none";
    gameOverModal.style.display = "flex";

    return;
  }

  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * columns),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);
    currentScore += 1;
    currentScoreElement.innerText = currentScore;

    if(currentScore > highScore){
      highScore = currentScore;
      localStorage.setItem("highScore", highScore.toString());
    }

  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    direction = "right";
  } else if (event.key == "ArrowLeft") {
    direction = "left";
  } else if (event.key == "ArrowUp") {
    direction = "up";
  } else {
    direction = "down";
  }
});

startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalID = setInterval(() => {
    renderSnake();
  }, 300);
  timerIntervalId = setInterval(()=>{
    let [min, sec] = time.split("-").map(Number);

    if(min == 59){
      min += 1;
      sec = 0;
    }
    else{
      sec += 1;
    }

    time = `${min}-${sec}`;
    timeElement.innerText = time;

  }, 1000);
});

restartButton.addEventListener("click", restartGame);

function restartGame() {

  clearInterval(intervalID);
  intervalID = null;
  
  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });
  modal.style.display = "none";

  currentScore = 0;
  time = `00-00`;
  currentScoreElement.innerText = currentScore;
  timeElement.innerText = time;
  highScoreElement.innerText = highScore;

  direction = "down";
  snake = [
    {
      x: 3,
      y: 9,
    },
  ];
  food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * columns),
    };
  intervalID = setInterval(()=>{
        renderSnake();
    }, 300)

  timerIntervalId = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);

    if (sec === 59) {
      min++;
      sec = 0;
    }
    else{
      sec += 1;
    }

    time = `${min}-${sec}`;
    timeElement.innerText = time;
  }, 1000);
}
