// Wait for the DOM to fully load before running any code
document.addEventListener('DOMContentLoaded', () => {
    // === Ternary Operators Challenge ===
    // Select DOM elements for the voting age check
    const ageInput = document.getElementById('age');
    const voteBtn = document.getElementById('voteBtn');
    const voteResult = document.getElementById('voteResult');

    // Function to check if the user is old enough to vote using a ternary operator
    function checkVotingAge(age) {
        if (isNaN(age) || age === '') {
            return 'Please enter a valid age!';
        }
        // Ternary operator: if age < 18, user cannot vote; otherwise, they can
        return age < 18 ? 'You are not old enough to vote.' : 'You can vote!';
    }

    // Function to update the voting result in the DOM
    function updateVotingResult() {
        const age = ageInput.value;
        voteResult.textContent = checkVotingAge(age);
    }

    // Event listener for button click to check voting eligibility
    voteBtn.addEventListener('click', () => {
        updateVotingResult();
    });

    // Event listener for real-time input feedback as the user types
    ageInput.addEventListener('input', () => {
        updateVotingResult();
    });

    // === New Keyword Assignment ===
    // Constructor function for Vehicle objects using 'this' keyword
    function Vehicle(make, model, year, color) {
        this.vehicle_make = make;
        this.vehicle_model = model;
        this.vehicle_year = year;
        this.vehicle_color = color;
    }

    // Create vehicle objects using the 'new' keyword
    var jack = new Vehicle("dodge", "viper", 2020, "red");
    var emily = new Vehicle("jeep", "trail hawk", 2019, "white and black");
    var erik = new Vehicle("ford", "pinto", 1971, "mustard");

    // Function to display Erik's vehicle details in the DOM
    window.myFunction = function() {
        document.getElementById("new_and_this").innerHTML = 
            "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + 
            " manufactured in " + erik.vehicle_year;
    };

    // === Reserved Keyword Challenge ===
    // Function to attempt assigning a reserved keyword and display the result
    window.reservedKeywordTest = function() {
        try {
            // Attempt to assign the reserved keyword 'true' to a variable
            var testValue = "test"; // Renamed variable to avoid using reserved keyword
            document.getElementById("reservedResult").innerHTML = 
                "Assigned reserved keyword: " + true;
        } catch (error) {
            // Display the error message in the DOM
            document.getElementById("reservedResult").innerHTML = 
                "Error: Cannot use reserved keyword 'true' as a variable name.";
        }
    };

    // === Nested Functions Assignment ===
    // Function to demonstrate a nested function with a counter
    window.countFunction = function() {
        // Initialize the starting point for the counter
        let starting_point = 10;

        // Outer function to handle the counting logic
        function count() {
            // Nested function to increment the counter
            function plusOne() {
                starting_point += 1;
            }
            // Call the nested function to modify starting_point
            plusOne();
            // Return the updated value
            return starting_point;
        }

        // Update the DOM with the result of the count function
        document.getElementById("nested_function").innerHTML = count();
    };
});