// Game state variables
let activePlayer = 'X'; // Current player (X or O)
let selectedSquares = []; // Tracks occupied squares (e.g., '0X', '1O')
let playerScore = 0; // Player's score
let computerScore = 0; // Computer's score
let clickEnabled = true; // Controls whether clicks are allowed
let moveCounter = 0; // Tracks number of moves
let gameTimer = 0; // Tracks game duration in seconds
let timerInterval = null; // Timer interval ID
let bgm = new Audio('./media/game-music.mp3'); // Background music
bgm.loop = true; // Loop background music

// Places X or O on the clicked square
function placeXOrO(squareNumber) {
    if (!clickEnabled || selectedSquares.some(element => element.includes(squareNumber))) {
        return false; // Ignore if clicks are disabled or square is taken
    }
    let select = document.getElementById(squareNumber);
    select.style.opacity = '0'; // Start fade-in
    if (activePlayer === 'X') {
        select.style.backgroundImage = 'url("images/x.jpg")'; // Place X image
    } else {
        select.style.backgroundImage = 'url("images/o.jpg")'; // Place O image
    }
    setTimeout(() => select.style.opacity = '1', 50); // Fade-in effect
    selectedSquares.push(squareNumber + activePlayer);
    moveCounter++;
    document.getElementById('move-counter').innerText = moveCounter;
    checkWinConditions();
    if (activePlayer === 'X') {
        activePlayer = 'O';
        audio('./media/mouse.mp3'); // Play placement sound
        disableClick();
        setTimeout(computersTurn, 1000); // Computer moves after 1s
    } else {
        activePlayer = 'X';
        audio('./media/mouse.mp3');
    }
    return true;
}

// Computer's turn logic (easy: random, hard: minimax)
function computersTurn() {
    const difficulty = document.getElementById('difficulty').value;
    let success = false;
    let pickASquare;
    if (difficulty === 'hard') {
        // Minimax algorithm for optimal move
        const bestMove = minimax(selectedSquares, 'O').index;
        if (bestMove !== undefined) {
            pickASquare = String(bestMove);
            success = placeXOrO(pickASquare);
        }
    } else {
        // Easy mode: prioritize win/block, then random
        const winCombos = [
            ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
            ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
            ['0', '4', '8'], ['2', '4', '6']
        ];
        for (let combo of winCombos) {
            let [a, b, c] = combo;
            if (selectedSquares.includes(a + 'O') && selectedSquares.includes(b + 'O') && !selectedSquares.some(s => s.includes(c))) {
                pickASquare = c;
                success = placeXOrO(pickASquare);
                if (success) return;
            }
            if (selectedSquares.includes(a + 'X') && selectedSquares.includes(b + 'X') && !selectedSquares.some(s => s.includes(c))) {
                pickASquare = c;
                success = placeXOrO(pickASquare);
                if (success) return;
            }
        }
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (!selectedSquares.some(s => s.includes(pickASquare))) {
                success = placeXOrO(pickASquare);
            }
        }
    }
}

// Minimax algorithm for hard difficulty
function minimax(board, player) {
    const winCombos = [
        ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],
        ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'],
        ['0', '4', '8'], ['2', '4', '6']
    ];
    // Check for terminal states
    for (let combo of winCombos) {
        if (combo.every(s => board.includes(s + 'O'))) return { score: 10 };
        if (combo.every(s => board.includes(s + 'X'))) return { score: -10 };
    }
    if (board.length >= 9) return { score: 0 };
    // Initialize best move
    let best = { score: player === 'O' ? -Infinity : Infinity };
    for (let i = 0; i < 9; i++) {
        if (!board.some(s => s.includes(String(i)))) {
            let newBoard = [...board, String(i) + player];
            let result = minimax(newBoard, player === 'O' ? 'X' : 'O');
            if (player === 'O') {
                if (result.score > best.score) {
                    best = { score: result.score, index: i };
                }
            } else {
                if (result.score < best.score) {
                    best = { score: result.score, index: i };
                }
            }
        }
    }
    return best;
}

// Checks for win or tie conditions
function checkWinConditions() {
    const winLines = [
        { squares: ['0X', '1X', '2X'], line: [50, 100, 558, 100] },
        { squares: ['3X', '4X', '5X'], line: [50, 304, 558, 304] },
        { squares: ['6X', '7X', '8X'], line: [50, 508, 558, 508] },
        { squares: ['0X', '3X', '6X'], line: [100, 50, 100, 558] },
        { squares: ['1X', '4X', '7X'], line: [304, 50, 304, 558] },
        { squares: ['2X', '5X', '8X'], line: [508, 50, 508, 558] },
        { squares: ['0X', '4X', '8X'], line: [100, 100, 520, 520] },
        { squares: ['6X', '4X', '2X'], line: [100, 508, 510, 90] },
        { squares: ['0O', '1O', '2O'], line: [50, 100, 558, 100] },
        { squares: ['3O', '4O', '5O'], line: [50, 304, 558, 304] },
        { squares: ['6O', '7O', '8O'], line: [50, 508, 558, 508] },
        { squares: ['0O', '3O', '6O'], line: [100, 50, 100, 558] },
        { squares: ['1O', '4O', '7O'], line: [304, 50, 304, 558] },
        { squares: ['2O', '5O', '8O'], line: [508, 50, 508, 558] },
        { squares: ['0O', '4O', '8O'], line: [100, 100, 520, 520] },
        { squares: ['6O', '4O', '2O'], line: [100, 508, 510, 90] }
    ];
    for (let condition of winLines) {
        if (arrayIncludes(condition.squares[0], condition.squares[1], condition.squares[2])) {
            drawWinLine(...condition.line);
            audio('./media/victory.mp3');
            if (condition.squares[0].endsWith('X')) {
                playerScore++;
                document.getElementById('player-score').innerText = playerScore;
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, colors: ['#ffd700', '#ff4500'] });
                }
            } else {
                computerScore++;
                document.getElementById('computer-score').innerText = computerScore;
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 }, colors: ['#ff0000', '#8b0000'] });
                }
            }
            disableClick();
            setTimeout(() => { clearCanvas(); resetGame(); }, 2000);
            return;
        }
    }
    if (selectedSquares.length >= 9) {
        audio('./media/draw.mp3');
        if (typeof confetti === 'function') {
            confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 }, colors: ['#888', '#aaa'] });
        }
        setTimeout(() => { clearCanvas(); resetGame(); }, 1000);
    }
}

// Checks if three squares are occupied by the same player
function arrayIncludes(squareA, squareB, squareC) {
    return selectedSquares.includes(squareA) && selectedSquares.includes(squareB) && selectedSquares.includes(squareC);
}

// Draws an animated win line with gradient
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2, x = x1, y = y1;
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, '#ffd700');
    gradient.addColorStop(1, '#ff4500');
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        ctx.clearRect(0, 0, 608, 608);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x, y);
        ctx.lineWidth = 10;
        ctx.strokeStyle = gradient;
        ctx.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) x += 10;
            if (y < y2) y += 10;
            if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) x += 10;
            if (y > y2) y -= 10;
            if (x >= x2 && y <= y2) cancelAnimationFrame(animationLoop);
        }
    }
    animateLineDrawing();
}

// Clears the canvas
function clearCanvas() {
    const canvas = document.getElementById('win-lines');
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 608, 608);
    }
}

// Plays audio with error handling
function audio(audioURL) {
    try {
        const sound = new Audio(audioURL);
        sound.play().catch(error => console.log('Audio play failed:', error));
    } catch (error) {
        console.log('Audio creation failed:', error);
    }
}

// Disables player clicks during computer's turn
function disableClick() {
    clickEnabled = false;
    document.body.style.pointerEvents = 'none';
    document.querySelectorAll('td').forEach(cell => cell.style.cursor = 'not-allowed');
}

// Enables player clicks
function enableClick() {
    clickEnabled = true;
    document.body.style.pointerEvents = 'auto';
    document.querySelectorAll('td').forEach(cell => cell.style.cursor = 'pointer');
}

// Resets the game state
function resetGame() {
    activePlayer = 'X';
    selectedSquares = [];
    moveCounter = 0;
    document.getElementById('move-counter').innerText = moveCounter;
    clearInterval(timerInterval);
    gameTimer = 0;
    document.getElementById('timer').innerText = `${gameTimer}s`;
    timerInterval = setInterval(() => {
        gameTimer++;
        document.getElementById('timer').innerText = `${gameTimer}s`;
    }, 1000);
    enableClick();
    for (let i = 0; i < 9; i++) {
        const square = document.getElementById(String(i));
        if (square) square.style.backgroundImage = '';
    }
    clearCanvas();
}

// Toggles background music
function toggleBGM() {
    if (bgm.paused) {
        bgm.play().catch(error => console.log('BGM play failed:', error));
        document.getElementById('bgm-toggle').innerText = 'Pause BGM';
    } else {
        bgm.pause();
        document.getElementById('bgm-toggle').innerText = 'Play BGM';
    }
}

// Event listeners
document.getElementById('restart-button').addEventListener('click', resetGame);
document.getElementById('bgm-toggle').addEventListener('click', toggleBGM);

// Initialize game
resetGame();