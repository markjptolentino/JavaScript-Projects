// Initialize game state variables for the point-earning game
let points = 0; // Tracks the player’s points
const pointsPerLevel = 10; // Number of points needed to level up
let level = 1; // Current level of the player

// Function to handle button clicks and update game state
function displayMessage() {
  points++; // Increment points on each click
  let sound = document.getElementById("clickSound"); // Get the audio element
  sound.currentTime = 0; // Reset sound to start for overlapping clicks
  sound.play(); // Play click sound

  // Update points display on the page with bounce animation
  let pointsElement = document.getElementById("points");
  pointsElement.innerHTML = "Points: " + points;
  pointsElement.style.animation = "bounceIn 0.5s ease-out";

  // Calculate and update progress bar with smooth transition
  let progress = (points % pointsPerLevel) / pointsPerLevel * 100;
  document.getElementById("progressBar").style.width = progress + "%";

  // Check if player levels up (every 10 points)
  if (points % pointsPerLevel === 0) {
    level++; // Increment level
    let levelElement = document.getElementById("level");
    levelElement.innerHTML = "Level: " + level; // Update level display
    levelElement.classList.add("level-up"); // Add level-up animation
    window.alert("Level Up! You reached Level " + level + "! Keep clicking!"); // Notify player
    document.getElementById("gameButton").style.background = "#ff4500"; // Flash button red
    setTimeout(() => {
      document.getElementById("gameButton").style.background = "#ffeb3b"; // Reset color
    }, 500);
  }
}

// Function to concatenate string using += operator
function myFunction() {
  let sentence = "I am learning"; // Initialize first part of the string
  sentence += " a lot from this course!"; // Concatenate second part using += operator
  let concatElement = document.getElementById("Concatenate"); // Get the element
  concatElement.innerHTML = sentence; // Display concatenated string
  concatElement.style.animation = "bounceIn 0.5s ease-out"; // Add bounce animation on click
}

// Function to reset the game state with animation
function resetGame() {
  points = 0; // Reset points to 0
  level = 1; // Reset level to 1
  document.getElementById("points").innerHTML = "Points: 0"; // Update points display
  document.getElementById("level").innerHTML = "Level: 1"; // Update level display
  document.getElementById("progressBar").style.width = "0%"; // Reset progress bar
  document.getElementById("Concatenate").innerHTML = "Click Here!"; // Reset concatenation text
  window.alert("Game Reset! Start clicking again!"); // Notify player of reset
  let resetElement = document.getElementById("resetButton");
  resetElement.style.animation = "pulse 0.5s"; // Add pulse animation on reset
  setTimeout(() => {
    resetElement.style.animation = "none"; // Remove animation after delay
  }, 500);
}