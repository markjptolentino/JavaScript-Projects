// Handles animal selection and displays a response with fun facts and dynamic styling
function animalFunction() {
    // Get the selected animal and ensure lowercase for consistency
    const animal = document.getElementById("animal_input").value.toLowerCase();
    let animalOutput;
    let imageSrc;
    let bgGradient;

    // Play a subtle click sound for interactivity
    playSound();

    // Switch statement to evaluate the animal choice and map to provided images
    switch (animal) {
        case "elephant":
            animalOutput = "Elephant 🐘 - Majestic and wise! Fun Fact: Elephants never forget and have incredible memory.";
            imageSrc = "images/f.jpg"; // Maps to elephant
            bgGradient = "from-gray-800 to-blue-900";
            break;
        case "tiger":
            animalOutput = "Tiger 🐅 - Fierce and powerful! Fun Fact: Tigers have unique stripe patterns, like fingerprints.";
            imageSrc = "images/t.jpg"; // Maps to tiger
            bgGradient = "from-orange-900 to-red-900";
            break;
        case "panda":
            animalOutput = "Panda 🐼 - Cute and cuddly! Fun Fact: Pandas eat up to 40 pounds of bamboo daily.";
            imageSrc = "images/p.jpg"; // Maps to panda
            bgGradient = "from-green-900 to-gray-900";
            break;
        case "dolphin":
            animalOutput = "Dolphin 🐬 - Smart and playful! Fun Fact: Dolphins communicate with clicks and whistles.";
            imageSrc = "images/dl.jpg"; // Maps to dolphin
            bgGradient = "from-blue-900 to-teal-900";
            break;
        case "eagle":
            animalOutput = "Eagle 🦅 - Soaring and free! Fun Fact: Eagles can see up to 2 miles away with precision.";
            imageSrc = "images/eg.jpg"; // Maps to eagle
            bgGradient = "from-gray-900 to-blue-700";
            break;
        case "wolf":
            animalOutput = "Wolf 🐺 - Loyal and strong! Fun Fact: Wolves can run up to 40 miles per hour.";
            imageSrc = "images/w.jpg"; // Maps to wolf
            bgGradient = "from-gray-900 to-purple-900";
            break;
        case "koala":
            animalOutput = "Koala 🐨 - Adorable and sleepy! Fun Fact: Koalas sleep up to 18 hours a day.";
            imageSrc = "images/k.jpg"; // Maps to koala
            bgGradient = "from-green-800 to-gray-800";
            break;
        default:
            animalOutput = "Please select an animal from the dropdown!";
            imageSrc = "";
            bgGradient = "from-teal-900 to-purple-900";
    }

    // Update the output, image, and background
    document.getElementById("output").innerHTML = animalOutput;
    const animalImage = document.getElementById("animal_image");
    if (imageSrc) {
        animalImage.src = imageSrc;
        animalImage.classList.remove("hidden");
        animalImage.classList.add("animate-image");
    } else {
        animalImage.classList.add("hidden");
        animalImage.classList.remove("animate-image");
    }
    document.getElementById("dynamic-bg").className = `bg-gradient-to-br ${bgGradient} min-h-screen flex flex-col items-center justify-center text-white transition-all duration-1000`;
}

// Picks a random animal and triggers the animal function
function randomAnimal() {
    const animals = ["elephant", "tiger", "panda", "dolphin", "eagle", "wolf", "koala"];
    const randomIndex = Math.floor(Math.random() * animals.length);
    document.getElementById("animal_input").value = animals[randomIndex];
    animalFunction();
}

// Resets the form and clears the output
function resetForm() {
    document.getElementById("animal_input").value = "";
    document.getElementById("output").innerHTML = "";
    const animalImage = document.getElementById("animal_image");
    animalImage.src = "";
    animalImage.classList.add("hidden");
    animalImage.classList.remove("animate-image");
    document.getElementById("dynamic-bg").className = "bg-gradient-to-br from-teal-900 to-purple-900 min-h-screen flex flex-col items-center justify-center text-white transition-all duration-1000";
    playSound();
}

// Plays a subtle click sound for button interactions
function playSound() {
    const audio = new Audio("https://www.soundjay.com/buttons/button-09.mp3");
    audio.play().catch(() => {}); // Ignore errors if sound fails
}