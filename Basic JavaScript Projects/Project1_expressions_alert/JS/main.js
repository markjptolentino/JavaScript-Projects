// Declare and initialize variables for the assignment requirements
let Sent1 = "This is the beginning of the string"; // First sentence variable
let Sent2 = " and this is the end of the string"; // Second sentence variable

// Use window.alert() to display a welcome message
window.alert("Welcome to the Epic Hover Adventure! Hover to earn points!"); // Alert user with excitement

// Concatenate and write initial content
let fullSentence = Sent1 + Sent2; // Expression to concatenate Sent1 and Sent2
document.write(fullSentence); // Write the concatenated string to the page
let lengthOfSentence = fullSentence.length; // Expression to get the length
document.write("<p style='color: #ffeb3b;'>Length: " + lengthOfSentence + " characters!</p>"); // Output with style

// Hover game variables
let hoverCount = 0;
let messages = [
  "You found a treasure!",
  "Magic sparkles activate!",
  "Epic win unlocked!",
  "Hover master level up!"
];
let currentIndex = 0;

// Function for onmouseover event with dynamic effects
function changeTextOnHover() {
  let hoverText = document.getElementById("hoverText");
  hoverText.style.animation = "pulse 0.5s infinite"; // Add pulsing animation
  hoverText.innerHTML = messages[currentIndex]; // Change text to next message
  currentIndex = (currentIndex + 1) % messages.length; // Cycle through messages

  // Play sound and update counter
  let sound = document.getElementById("hoverSound");
  sound.play();
  hoverCount++;
  document.getElementById("counter").innerHTML = "Hovers: " + hoverCount;

  // Reward message at 5 hovers
  if (hoverCount === 5) {
    window.alert("Congrats! You’re a Hover Legend! Keep going!");
  }
}

// Function for onmouseout event to reset
function resetText() {
  let hoverText = document.getElementById("hoverText");
  hoverText.style.animation = "none"; // Stop animation
  hoverText.innerHTML = "Hover over me for magic!";
}