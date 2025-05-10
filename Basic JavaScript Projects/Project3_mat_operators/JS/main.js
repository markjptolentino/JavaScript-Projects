// Function to perform and show addition only
function additionFunction() {
  let addition = 2 + 2;
  let resultElement = document.getElementById("Math");
  if (resultElement) {
    resultElement.innerHTML = "Addition Result: 2 + 2 = " + addition;
    resultElement.classList.add("result");
  }
}

// Function to perform subtraction only
function subtractionFunction() {
  let subtraction = 5 - 2;
  let resultElement = document.getElementById("MathSubtraction");
  if (resultElement) {
    resultElement.innerHTML = "Subtraction Result: 5 - 2 = " + subtraction;
    resultElement.classList.add("result");
  }
}

// Function to perform multiplication only
function multiplicationFunction() {
  let multiplication = 6 * 8;
  let resultElement = document.getElementById("MathMultiplication");
  if (resultElement) {
    resultElement.innerHTML = "Multiplication Result: 6 × 8 = " + multiplication;
    resultElement.classList.add("result");
  }
}

// Function to perform division only
function divisionFunction() {
  let division = 48 / 6;
  let resultElement = document.getElementById("MathDivision");
  if (resultElement) {
    resultElement.innerHTML = "Division Result: 48 ÷ 6 = " + division;
    resultElement.classList.add("result");
  }
}

// Function to perform multiple operations
function more_Math() {
  let simple_Math = (1 + 2) * 10 / 2 - 5;
  let resultElement = document.getElementById("MathMultiple");
  if (resultElement) {
    resultElement.innerHTML = "Multiple Operations Result: (1 + 2) × 10 ÷ 2 - 5 = " + simple_Math;
    resultElement.classList.add("result");
  }
}

// Function to perform modulus operation
function modulus_Operator() {
  let simple_Math = 25 % 6;
  let resultElement = document.getElementById("MathModulus");
  if (resultElement) {
    resultElement.innerHTML = "Modulus Result: When you divide 25 by 6 you have a remainder of: " + simple_Math;
    resultElement.classList.add("result");
  }
}

// Function to perform negation operation
function negation_Operator() {
  let x = 10;
  let resultElement = document.getElementById("MathNegation");
  if (resultElement) {
    resultElement.innerHTML = "Negation Result: The negation of 10 is: " + (-x);
    resultElement.classList.add("result");
  }
}

// Function to perform increment operation
function increment_Operator() {
  let x = 5;
  x++;
  console.log("Increment function called, x =", x); // Debugging log
  let resultElement = document.getElementById("MathIncrement");
  if (resultElement) {
    resultElement.innerHTML = "Increment Result: 5 incremented by 1 is: " + x;
    resultElement.classList.add("result");
  } else {
    console.error("Element with id 'MathIncrement' not found");
  }
}

// Function to perform decrement operation
function decrement_Operator() {
  let x = 5.25;
  x--;
  console.log("Decrement function called, x =", x); // Debugging log
  let resultElement = document.getElementById("MathDecrement");
  if (resultElement) {
    resultElement.innerHTML = "Decrement Result: 5.25 decremented by 1 is: " + x;
    resultElement.classList.add("result");
  } else {
    console.error("Element with id 'MathDecrement' not found");
  }
}

// Function to perform random number generation
function random_Operator() {
  let randomNum = Math.random() * 100;
  console.log("Random function called, randomNum =", randomNum); // Debugging log
  let resultElement = document.getElementById("MathRandom");
  if (resultElement) {
    resultElement.innerHTML = "Random Result: Number between 0 and 100 is: " + randomNum.toFixed(2);
    resultElement.classList.add("result");
  } else {
    console.error("Element with id 'MathRandom' not found");
  }
}

// Function to perform square root operation
function sqrt_Operator() {
  let num = 16;
  let result = Math.sqrt(num);
  console.log("Square root function called, result =", result); // Debugging log
  let resultElement = document.getElementById("MathSqrt");
  if (resultElement) {
    resultElement.innerHTML = "Square Root Result: √16 = " + result;
    resultElement.classList.add("result");
  } else {
    console.error("Element with id 'MathSqrt' not found");
  }
}

// Function to show all operations at once
function showAllOperations() {
  additionFunction();        // Show addition result
  subtractionFunction();     // Show subtraction result
  multiplicationFunction();  // Show multiplication result
  divisionFunction();        // Show division result
  more_Math();               // Show multiple operations result
  modulus_Operator();        // Show modulus operation result
  negation_Operator();       // Show negation operation result
  increment_Operator();      // Show increment operation result
  decrement_Operator();      // Show decrement operation result
  random_Operator();         // Show random number result
  sqrt_Operator();           // Show square root result
}