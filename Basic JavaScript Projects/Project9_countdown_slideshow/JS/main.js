// Countdown Timer Function
function countdown() {
    // Get the number of seconds from the input field
    let seconds = document.getElementById("seconds").value;
    const timer = document.getElementById("timer");

    // Validate input
    if (!seconds || seconds <= 0) {
        alert("Please enter a valid number of seconds!");
        return;
    }

    // Inner function to handle each tick of the countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        // Set a timeout to call tick again after 1 second
        const time = setTimeout(tick, 1000);

        // Check if the countdown has reached -1
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

    // Start the countdown
    tick();
}

// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Move to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Jump to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the current slide and handle navigation
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Wrap around if index exceeds number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden");
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("bg-blue-600");
        dots[i].classList.add("bg-gray-500");
    }

    // Show the current slide and highlight the corresponding dot
    slides[slideIndex - 1].classList.remove("hidden");
    dots[slideIndex - 1].classList.remove("bg-gray-500");
    dots[slideIndex - 1].classList.add("bg-blue-600");
}