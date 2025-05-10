// Global variable: Tracks user interactions across the program
var interactionCount = 0;

// Function to update progress tracker
function updateProgress() {
    interactionCount++;
    document.getElementById("progress").innerHTML = `Interactions: ${interactionCount}`;
    // Trigger confetti every 5 interactions
    if (interactionCount % 5 === 0) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

// Real-time clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("realTimeClock").innerHTML = `Current Time: ${timeString}`;
}
setInterval(updateClock, 1000); // Update every second

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle("light");
    document.getElementById("themeToggle").innerHTML = document.body.classList.contains("light") ? "🌞 Light Mode" : "🌙 Dark Mode";
    updateProgress();
}

// Function with a local variable and if statement for greeting
function getGreeting() {
    // Local variable: Only accessible within this function
    var localTime = new Date().getHours();
    let greeting;
    if (localTime < 12) {
        greeting = "Good morning, space traveler!";
        confetti({ particleCount: 50, spread: 50 });
    } else if (localTime < 18) {
        greeting = "Good afternoon, cosmic explorer!";
    } else {
        greeting = "Good evening, star commander!";
    }
    document.getElementById("greeting").innerHTML = greeting;
    updateProgress();
}

// Function with an intentional error for debugging
function faultyFunction() {
    try {
        // Local variable
        var x = 10;
        // Intentional error: Accessing undefined variable 'y'
        var result = x + y;
        document.getElementById("debugOutput").innerHTML = "This shouldn't display!";
    } catch (error) {
        console.log("Error detected: ", error.message);
        document.getElementById("debugOutput").innerHTML = `Oops! Error: ${error.message}`;
    }
    updateProgress();
}

// Function with else statement for voting eligibility
function checkVotingAge() {
    var age = document.getElementById("age").value;
    var result;
    if (age >= 18) {
        result = "You're old enough to vote in the galactic election!";
        confetti({ particleCount: 80, spread: 60 });
    } else if (age > 0) {
        result = "You're too young to vote, young padawan!";
    } else {
        result = "Please enter a valid age!";
    }
    document.getElementById("votingStatus").innerHTML = result;
    updateProgress();
}

// Time_function with else-if statements to determine time of day
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time >= 0 && time < 12) {
        reply = "It's morning in the cosmos!";
        confetti({ particleCount: 50, spread: 50 });
    } else if (time >= 12 && time < 18) {
        reply = "It's afternoon, time for a space nap!";
    } else {
        reply = "It's evening, let the stars shine!";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
    updateProgress();
}

// Initialize clock on page load
updateClock();