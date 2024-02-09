// (A) Canvas
let canvas = document.getElementById("snake");

// (B) Context
let context = canvas.getContext("2d");

// (C) Box Size
let box = 32;

// (D) Snake
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

// (E) Direction
let direction = "right";

// (F) Food
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

// (G) Score
let score = 0;

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function createFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function startGame() {
    // Mecânica de movimentação
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    // Verificar se a cobrinha bateu nela mesma
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    // Coordenadas da cabeça da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Direcionamento da cobra
    if( direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // Verificar se a cobra comeu a comida
    if(snakeX == food.x && snakeY == food.y){
        score++;
        document.getElementById('score').innerHTML = 'Pontuação: ' + score;
        food = {
            x: Math.floor(Math.random() * 15 + 1) * box,
            y: Math.floor(Math.random() * 15 + 1) * box
        };
    } else {
        // Remover o último quadradinho da cobra
        snake.pop();
    }

    // Criar uma nova cabeça para a cobra
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Adicionar a nova cabeça à primeira posição da cobra
    snake.unshift(newHead);

    // Invocar as funções
    createBG();
    createSnake();
    createFood();
}

// Iniciar o jogo
let jogo = setInterval(startGame, 100);

//Parte 8