const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 40,
    height: 40,
    velocityY: 0,
    gravity: 0.5,
    jump: -10
};

const pipes = [];
let score = 0;
let gameInterval;

function drawBird() {
    ctx.fillStyle = '#f4e55a';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipe(pipeX, openingY, openingHeight) {
    ctx.fillStyle = '#94d358';
    ctx.fillRect(pipeX, 0, 60, openingY);
    ctx.fillRect(pipeX, openingY + openingHeight, 60, canvas.height - openingY - openingHeight);
}

function drawScore() {
    ctx.font = '30px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Score: ' + score, 10, 50);
}

function checkCollisions() {
    // Check collision with the ground
    if (bird.y + bird.height >= canvas.height) {
        endGame();
    }

    // Check collision with pipes
    for (const pipe of pipes) {
        if (bird.x + bird.width >= pipe.x && bird.x <= pipe.x + 60) {
            if (bird.y <= pipe.openingY || bird.y + bird.height >= pipe.openingY + pipe.openingHeight) {
                endGame();
            }
        }
    }
}

function endGame() {
    clearInterval(gameInterval);
    alert('Game Over! Your score: ' + score);
    bird.y = canvas.height / 2;
    bird.velocityY = 0;
    pipes.length = 0;
    score = 0;
    gameInterval = setInterval(update, 1000 / 60);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bird.velocityY += bird.gravity;
    bird.y += bird.velocityY;

    if (bird.y < 0) {
        bird.y = 0;
        bird.velocityY = 0;
    }

    if (bird.y + bird.height > canvas.height) {
        bird.y = canvas.height - bird.height;
        bird.velocityY = 0;
    }

    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
        const openingY = Math.floor(Math.random() * (canvas.height - 200)) + 100;
        const openingHeight = 200;
        pipes.push({ x: canvas.width, openingY, openingHeight });
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].x -= 2;

        if (pipes[i].x + 60 < 0) {
            pipes.splice(i, 1);
            score++;
        }
    }

    drawBird();
    for (const pipe of pipes) {
        drawPipe(pipe.x, pipe.openingY, pipe.openingHeight);
    }
    drawScore();

    checkCollisions();
}

document.addEventListener('keydown', function (event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        bird.velocityY = bird.jump;
    }
});

gameInterval = setInterval(update, 1000 / 60);
