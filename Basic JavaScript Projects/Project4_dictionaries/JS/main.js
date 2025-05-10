// Global variable to track the current car index
let currentIndex = 0;

// Function to display car dictionary details and cycle through cars
function myDictionary() {
    // Define an array of car objects (dictionaries) with key-value pairs
    const cars = [
        {
            Make: "Lamborghini",
            Model: "Aventador SVJ",
            Year: 2021,
            Color: "Red",
            Engine: "6.5L V12",
            Price: 573000,
            Feature: "Scissor Doors",
            Image: "images/a.jpg"
        },
        {
            Make: "Bugatti",
            Model: "Chiron Super Sport",
            Year: 2022,
            Color: "Black",
            Engine: "8.0L W16",
            Price: 3900000,
            Feature: "World’s Fastest",
            Image: "images/b.jpg"
        },
        {
            Make: "Ferrari",
            Model: "SF90 Stradale",
            Year: 2023,
            Color: "Red",
            Engine: "4.0L V8 Hybrid",
            Price: 625000,
            Feature: "Hybrid Power",
            Image: "images/R.jpg"
        }
    ];

    // Select the current car based on the index
    const car = cars[currentIndex];

    // Delete the Feature key for Lamborghini before displaying
    if (car.Make === "Lamborghini") {
        delete car.Feature; // Removes the Feature key-value pair
    }

    // Update the Dictionary element to show the Feature status
    const dictionaryElement = document.getElementById("Dictionary");
    dictionaryElement.innerHTML = car.Feature !== undefined ? 
        `Feature: ${car.Feature}` : // Display Feature if it exists
        `Feature for ${car.Make} is undefined`; // Indicate Feature was deleted

    // Update the output element with car details
    const outputElement = document.getElementById("output");
    if (car.Make === "Lamborghini") {
        outputElement.innerHTML = "Feature deleted for Lamborghini!"; // Confirm deletion
    } else {
        // Array of random messages for Bugatti and Ferrari
        const messages = [
            `Behold the ${car.Year} ${car.Make} ${car.Model} in ${car.Color}!`,
            `This ${car.Make} ${car.Model} rocks a ${car.Engine} engine!`,
            `The ${car.Model} shines with ${car.Feature.toLowerCase()}!`,
            `Price: $${car.Price.toLocaleString()} for this ${car.Color} beast!`
        ];
        // Select a random message
        outputElement.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    }

    // Update the car image
    const imageElement = document.getElementById("carImage");
    imageElement.src = car.Image; // Set the image source

    // Update the counter to show current car number
    const counterElement = document.getElementById("counter");
    counterElement.innerHTML = `Car ${currentIndex + 1}/3`; // Display car number (1/3, 2/3, 3/3)

    // Remove animations to reset them
    dictionaryElement.classList.remove("fade-in");
    outputElement.classList.remove("fade-in");
    imageElement.classList.remove("zoom-in");
    counterElement.classList.remove("fade-in");

    // Trigger reflow to restart animations
    void dictionaryElement.offsetWidth;
    void outputElement.offsetWidth;
    void imageElement.offsetWidth;
    void counterElement.offsetWidth;

    // Re-apply animations
    dictionaryElement.classList.add("fade-in");
    outputElement.classList.add("fade-in");
    imageElement.classList.add("zoom-in");
    counterElement.classList.add("fade-in");

    // Increment index, looping back to 0 if at the end
    currentIndex = (currentIndex + 1) % cars.length;
}