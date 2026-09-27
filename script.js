

const board = document.querySelector(".board");

const blockHeight = 30;
const blockWidth = 30;

const columns = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = [];
const snake = [
    {
        x: 1,
        y: 3
    }
]

for(let row = 0; row < rows; row++){
    for(let col = 0; col < columns; col++){
        const block = document.createElement('div');
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row}-${col}`] = block;
    }
}

function renderSnake(){

    snake.forEach((segment) => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    })
}

let direction = "down";

setInterval(()=>{
    
    let head = null;

    if(direction === "left"){
        head = 
        {
            x : snake[0].x,
            y: snake[0].y-1
        } 
    }
    else if(direction === "right"){
        head = {
            x: snake[0].x,
            y: snake[0].y+1
        }
    }
    else if(direction === "down"){
        head = {
            x: snake[0].x+1,
            y: snake[0].y
        }
    }
    else if(direction === "up"){
        head = {
            x: snake[0].x-1,
            y: snake[0].y
        }
    }
    
    
    
    snake.forEach((segment) => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    })

    snake.unshift(head);
    snake.pop();

    renderSnake();

}, 500)

addEventListener("keydown", (event)=>{

    if(event.key=="ArrowRight"){
        direction = "right";
    }
    else if(event.key == "ArrowLeft"){
        direction = "left";
    }
    else if(event.key == "ArrowUp"){
        direction = "up";
    }
    else{
        direction = "down";
    }
    
})