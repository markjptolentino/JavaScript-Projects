// While Loop: Counts from 1 to 10
function callLoop() {
    let digit = "";
    let x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = digit;
}

// For Loop: Lists musical instruments from an array
function forLoop() {
    const instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    let content = "";
    for (let y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

// Array: Displays a description from an array of cat picture states
function arrayFunction() {
    const catPicture = [];
    catPicture[0] = "sleeping";
    catPicture[1] = "playing";
    catPicture[2] = "eating";
    catPicture[3] = "purring";
    document.getElementById("array").innerHTML = "In this picture, the cat is " + catPicture[2] + ".";
}

// Object: Creates a car object with properties and a method using let
function objectFunction() {
    let car = {
        make: "Dodge",
        model: "Viper",
        year: "2021",
        color: "red",
        description: function() {
            return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
        }
    };
    document.getElementById("car_object").innerHTML = car.description();
}

// Const Keyword: Creates an object with const, modifies properties, and adds a new one
function constantFunction() {
    const musicalInstrument = { type: "guitar", brand: "Fender", color: "black" };
    musicalInstrument.color = "blue"; // Change property value
    musicalInstrument.price = "$900"; // Add new property
    document.getElementById("constant").innerHTML = "The cost of the " + musicalInstrument.type + " (color: " + musicalInstrument.color + ") was " + musicalInstrument.price + ".";
}

// Let Keyword: Demonstrates block scope with let
function letFunction() {
    let x = 82;
    let output = x + "<br>";
    {
        let x = 33;
        output += x + "<br>";
    }
    output += x;
    document.getElementById("let_scope").innerHTML = output;
}

// String Length: Returns the length of a string
function stringLengthFunction() {
    const text = "JavaScript is awesome!";
    const length = text.length;
    document.getElementById("string_length").innerHTML = `The string "${text}" has ${length} characters.`;
}

// Return Statement: Adds two numbers and returns the result
function returnFunction() {
    function addTwo(x, y) {
        return x + y;
    }
    const result = addTwo(5, 3);
    document.getElementById("return_result").innerHTML = `5 + 3 = ${result}`;
}

// Break and Continue: Demonstrates break and continue in loops
function breakContinueFunction() {
    let output = "Break Example (stops at 5):<br>";
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break; // Stops the loop at 5
        }
        output += i + "<br>";
    }
    output += "<br>Continue Example (skips 5):<br>";
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Skips 5
        }
        output += i + "<br>";
    }
    document.getElementById("break_continue").innerHTML = output;
}