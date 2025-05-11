// Calculator state variables
let display = document.querySelector('#display'); // Main display input
let history = document.querySelector('#history'); // History panel
let progress = document.querySelector('#progress'); // Progress bar
let memory = 0; // Memory storage
let calcCounter = 0; // Total calculations
let streakCounter = 0; // Consecutive calculations without reset
let darkMode = false; // Theme toggle

// Appends a character to the display
function appendToDisplay(value) {
    if (value === '.' && display.value.includes('.')) return; // Prevent multiple decimals
    if (display.value === '0' && value !== '.') {
        display.value = value; // Replace initial 0
    } else {
        display.value += value; // Append value
    }
}

// Clears the display (C: full clear, CE: clear entry)
function clearDisplay(type) {
    if (type === 'C') {
        display.value = '0';
        history.innerHTML = '';
        streakCounter = 0;
        document.querySelector('#streak-counter').innerText = streakCounter;
        updateProgress();
    } else {
        display.value = '0';
    }
    display.classList.remove('error');
}

// Performs calculations (equals, sqrt, power)
function calculate(operation) {
    try {
        let result;
        if (operation === '=') {
            let expression = display.value.replace(/×/g, '*');
            if (!expression) throw new Error('Empty expression'); // Check for empty input
            result = parseFloat(eval(expression).toFixed(10)); // Parse and evaluate
            if (isNaN(result)) throw new Error('Invalid calculation');
            history.innerHTML += `<div>${expression} = ${result}</div>`;
            display.value = result;
            updateStats();
        } else if (operation === 'sqrt') {
            let num = parseFloat(display.value);
            if (num < 0) throw new Error('Negative square root');
            result = parseFloat(Math.sqrt(num).toFixed(10));
            history.innerHTML += `<div>√${num} = ${result}</div>`;
            display.value = result;
            updateStats();
        } else if (operation === 'pow') {
            let num = parseFloat(display.value);
            result = parseFloat((num * num).toFixed(10));
            history.innerHTML += `<div>${num}² = ${result}</div>`;
            display.value = result;
            updateStats();
        }
    } catch (error) {
        display.value = 'Error';
        display.classList.add('error');
        setTimeout(() => {
            display.value = '0';
            display.classList.remove('error');
        }, 1000);
        console.log('Calculation error:', error);
    }
}

// Manages memory functions (MC, MR, M+, M-)
function memoryFunction(type) {
    try {
        let num = parseFloat(display.value) || 0;
        if (type === 'MC') {
            memory = 0;
        } else if (type === 'MR') {
            display.value = memory;
        } else if (type === 'M+') {
            memory += num;
        } else if (type === 'M-') {
            memory -= num;
        }
    } catch (error) {
        console.log('Memory error:', error);
    }
}

// Updates calculation stats and achievements
function updateStats() {
    calcCounter++;
    streakCounter++;
    document.querySelector('#calc-counter').innerText = calcCounter;
    document.querySelector('#streak-counter').innerText = streakCounter;
    updateProgress();
    updateAchievements();
    triggerConfetti();
}

// Updates the progress bar based on streak
function updateProgress() {
    const maxStreak = 100; // Progress bar max
    const progressWidth = Math.min((streakCounter / maxStreak) * 100, 100);
    progress.style.width = `${progressWidth}%`;
}

// Updates achievement badges
function updateAchievements() {
    if (calcCounter >= 10) {
        document.querySelector('#ach-10').classList.add('unlocked');
        if (calcCounter === 10) triggerConfetti();
    }
    if (calcCounter >= 50) {
        document.querySelector('#ach-50').classList.add('unlocked');
        if (calcCounter === 50) triggerConfetti();
    }
    if (calcCounter >= 100) {
        document.querySelector('#ach-100').classList.add('unlocked');
        if (calcCounter === 100) triggerConfetti();
    }
}

// Triggers confetti animation
function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 }, colors: ['#ffd700', '#ff4500'] });
    }
}

// Toggles light/dark theme
function toggleTheme() {
    darkMode = !darkMode; // Toggle using not operator
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator-container').classList.toggle('dark-mode');
    document.querySelector('#display').classList.toggle('dark-mode');
    document.querySelector('.history').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(btn => btn.classList.toggle('dark-mode'));
    document.querySelector('#theme-toggle').innerText = darkMode ? 'Light Mode' : 'Dark Mode';
}

// Keyboard input support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) appendToDisplay(key);
    else if (key === '.') appendToDisplay('.');
    else if (key === '+') appendToDisplay('+');
    else if (key === '-') appendToDisplay('-');
    else if (key === '*') appendToDisplay('*');
    else if (key === '/') appendToDisplay('/');
    else if (key === 'Enter') calculate('=');
    else if (key === 'Escape') clearDisplay('C');
    else if (key === 'Backspace') clearDisplay('CE');
});

// Initialize display
display.value = '0';