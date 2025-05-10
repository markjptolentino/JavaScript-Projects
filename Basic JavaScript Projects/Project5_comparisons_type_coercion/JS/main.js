// Displays the data type of a user-provided value
function displayTypeOf() {
    const input = document.getElementById('typeOfInput').value; // Get user input
    let value;
    try {
        value = eval(input); // Attempt to evaluate input as JavaScript code
    } catch {
        value = input; // Fallback to string if evaluation fails
    }
    const result = typeof value; // Get the data type using typeof
    document.getElementById('typeOfResult').innerText = `Type: ${result.charAt(0).toUpperCase() + result.slice(1)}`; // Display capitalized type
    animateResult('typeOfResult'); // Animate the result
}

// Combines two values with a selected operator to demonstrate type coercion
function displayCoercion() {
    const input1 = document.getElementById('coercionInput1').value; // Get first input
    const input2 = document.getElementById('coercionInput2').value; // Get second input
    const operator = document.getElementById('operatorSelect').value; // Get selected operator
    let value1, value2;
    
    try {
        value1 = eval(input1); // Evaluate first input
    } catch {
        value1 = input1; // Fallback to string
    }
    try {
        value2 = eval(input2); // Evaluate second input
    } catch {
        value2 = input2; // Fallback to string
    }

    let result, explanation;
    try {
        switch (operator) {
            case '+':
                result = value1 + value2; // Addition or concatenation
                explanation = getCoercionExplanation(value1, value2, operator, result);
                break;
            case '-':
                result = value1 - value2; // Subtraction
                explanation = getCoercionExplanation(value1, value2, operator, result);
                break;
            case '*':
                result = value1 * value2; // Multiplication
                explanation = getCoercionExplanation(value1, value2, operator, result);
                break;
            case '/':
                result = value1 / value2; // Division
                explanation = getCoercionExplanation(value1, value2, operator, result);
                break;
            default:
                result = 'Invalid operator';
                explanation = 'Please select a valid operator.';
        }
    } catch (error) {
        result = 'Error';
        explanation = 'An error occurred during the operation. Please check your inputs.';
    }

    document.getElementById('coercionResult').innerText = `Result: "${result}" (Type: ${typeof result})`; // Display result
    document.getElementById('coercionExplanation').innerText = explanation; // Display explanation
    animateResult('coercionResult'); // Animate the result
}

// Provides an explanation for type coercion based on the operation
function getCoercionExplanation(value1, value2, operator, result) {
    const type1 = typeof value1; // Get type of first value
    const type2 = typeof value2; // Get type of second value
    
    if (operator === '+') {
        if (type1 === 'string' || type2 === 'string') {
            return `The + operator concatenates when a string is involved. "${value1}" (type: ${type1}) and "${value2}" (type: ${type2}) are coerced to strings, resulting in "${result}".`;
        } else {
            return `The + operator adds numbers. "${value1}" (type: ${type1}) and "${value2}" (type: ${type2}) are coerced to numbers, resulting in ${result}.`;
        }
    } else if (['-', '*', '/'].includes(operator)) {
        return `The ${operator} operator converts operands to numbers. "${value1}" (type: ${type1}) becomes ${Number(value1)} and "${value2}" (type: ${type2}) becomes ${Number(value2)}, resulting in ${result}.`;
    }
    return 'Coercion details unavailable.';
}

// Displays NaN by dividing 0 by 0
function displayNaN() {
    const result = 0 / 0; // Produces NaN
    document.getElementById('nanResult').innerText = `Result: ${result} (Explanation: Dividing 0 by 0 is undefined, resulting in NaN)`;
    animateResult('nanResult');
}

// Checks if a user-provided value is NaN
function displayIsNaN() {
    const input = document.getElementById('isNaNInput').value; // Get user input
    let value;
    try {
        value = eval(input); // Evaluate input
    } catch {
        value = input; // Fallback to string
    }
    const result = isNaN(value); // Check if value is NaN
    const explanation = result 
        ? `Result: ${result} (Explanation: "${input}" is not a number)`
        : `Result: ${result} (Explanation: "${input}" is a number)`;
    document.getElementById('isNaNResult').innerText = explanation; // Display result
    animateResult('isNaNResult');
}

// Displays the maximum floating-point number and what happens when it’s exceeded
function displayFloatingPoint() {
    const maxFloat = 1.797693134862315e308; // Max float in JavaScript
    const infinityTest = maxFloat * 2; // Exceeds max float, results in Infinity
    document.getElementById('floatResult').innerText = `Max Float: ${maxFloat} (Type: number)\nExceeding it: ${infinityTest} (Type: ${typeof infinityTest})`;
    animateResult('floatResult');
}

// Displays Infinity by using a number larger than the max float
function displayInfinity() {
    const result = 2e310; // Exceeds max float, results in Infinity
    document.getElementById('infinityResult').innerText = `Result: ${result} (Explanation: 2E310 exceeds JavaScript's max float of 1.797693134862315E308, resulting in Infinity)`;
    animateResult('infinityResult');
}

// Displays -Infinity by using a negative number smaller than the min float
function displayNegativeInfinity() {
    const result = -2e310; // Below min float, results in -Infinity
    document.getElementById('negativeInfinityResult').innerText = `Result: ${result} (Explanation: -2E310 is below JavaScript's min float of -1.797693134862315E308, resulting in -Infinity)`;
    animateResult('negativeInfinityResult');
}

// Displays true using the > operator
function displayTrue() {
    const result = 5 > 2; // 5 is greater than 2
    document.getElementById('trueResult').innerText = `Result: ${result} (Explanation: 5 is greater than 2, so 5 > 2 evaluates to true)`;
    animateResult('trueResult');
}

// Displays false using the < operator
function displayFalse() {
    const result = 10 < 2; // 10 is not less than 2
    document.getElementById('falseResult').innerText = `Result: ${result} (Explanation: 10 is not less than 2, so 10 < 2 evaluates to false)`;
    animateResult('falseResult');
}

// Displays false in the console using the < operator
function displayConsoleFalse() {
    console.log(10 < 2); // Outputs false to console
    document.getElementById('consoleFalseResult').innerText = `Check the browser console (F12 or Ctrl+Shift+I) to see the result of 10 < 2 (false)!`;
    animateResult('consoleFalseResult');
}

// Displays true using the == operator
function displayEqualTrue() {
    const result = 10 == 10; // 10 equals 10
    document.getElementById('equalTrueResult').innerText = `Result: ${result} (Explanation: 10 is equal to 10, so 10 == 10 evaluates to true)`;
    animateResult('equalTrueResult');
}

// Displays false using the == operator
function displayEqualFalse() {
    const result = 3 == 11; // 3 does not equal 11
    document.getElementById('equalFalseResult').innerText = `Result: ${result} (Explanation: 3 is not equal to 11, so 3 == 11 evaluates to false)`;
    animateResult('equalFalseResult');
}

// Displays true using the === operator
function displayTripleEqualTrue() {
    const result = 10 === 10; // Same value and type
    document.getElementById('tripleEqualTrueResult').innerText = `Result: ${result} (Explanation: 10 (number) is equal to 10 (number) in both value and type, so 10 === 10 evaluates to true)`;
    animateResult('tripleEqualTrueResult');
}

// Displays false using === with different type and value
function displayTripleEqualFalseDiffTypeDiffValue() {
    const result = 10 === "20"; // Different value and type
    document.getElementById('tripleEqualFalseDiffTypeDiffValueResult').innerText = `Result: ${result} (Explanation: 10 (number) and "20" (string) differ in both value and type, so 10 === "20" evaluates to false)`;
    animateResult('tripleEqualFalseDiffTypeDiffValueResult');
}

// Displays false using === with different type but same value
function displayTripleEqualFalseDiffTypeSameValue() {
    const result = 82 === "82"; // Same value, different type
    document.getElementById('tripleEqualFalseDiffTypeSameValueResult').innerText = `Result: ${result} (Explanation: 82 (number) and "82" (string) have the same value but different types, so 82 === "82" evaluates to false)`;
    animateResult('tripleEqualFalseDiffTypeSameValueResult');
}

// Displays false using === with same type but different value
function displayTripleEqualFalseSameTypeDiffValue() {
    const result = "Magnus" === "Magnux"; // Same type, different value
    document.getElementById('tripleEqualFalseSameTypeDiffValueResult').innerText = `Result: ${result} (Explanation: "Magnus" (string) and "Magnux" (string) have the same type but different values, so "Magnus" === "Magnux" evaluates to false)`;
    animateResult('tripleEqualFalseSameTypeDiffValueResult');
}

// Displays true using the && operator
function displayAndTrue() {
    const result = 5 > 2 && 10 > 4; // Both conditions true
    document.getElementById('andTrueResult').innerText = `Result: ${result} (Explanation: Both 5 > 2 (true) and 10 > 4 (true) are true, so 5 > 2 && 10 > 4 evaluates to true)`;
    animateResult('andTrueResult');
}

// Displays false using the && operator
function displayAndFalse() {
    const result = 5 > 10 && 10 > 4; // First condition false
    document.getElementById('andFalseResult').innerText = `Result: ${result} (Explanation: 5 > 10 (false) is false, so 5 > 10 && 10 > 4 evaluates to false, regardless of 10 > 4)`;
    animateResult('andFalseResult');
}

// Displays true using the || operator
function displayOrTrue() {
    const result = 5 > 10 || 10 > 4; // Second condition true
    document.getElementById('orTrueResult').innerText = `Result: ${result} (Explanation: 10 > 4 (true) is true, so 5 > 10 || 10 > 4 evaluates to true, regardless of 5 > 10)`;
    animateResult('orTrueResult');
}

// Displays false using the || operator
function displayOrFalse() {
    const result = 5 > 10 || 10 > 20; // Both conditions false
    document.getElementById('orFalseResult').innerText = `Result: ${result} (Explanation: Both 5 > 10 (false) and 10 > 20 (false) are false, so 5 > 10 || 10 > 20 evaluates to false)`;
    animateResult('orFalseResult');
}

// Displays true using the ! operator
function displayNotTrue() {
    const result = ! (5 > 10); // Negates false to true
    document.getElementById('notTrueResult').innerText = `Result: ${result} (Explanation: 5 > 10 is false, so ! (5 > 10) negates it to true)`;
    animateResult('notTrueResult');
}

// Displays false using the ! operator
function displayNotFalse() {
    const result = ! (20 > 10); // Negates true to false
    document.getElementById('notFalseResult').innerText = `Result: ${result} (Explanation: 20 > 10 is true, so ! (20 > 10) negates it to false)`;
    animateResult('notFalseResult');
}

// Evaluates a user-provided Boolean comparison
function displayCustomBoolean() {
    const input = document.getElementById('booleanInput').value; // Get user input
    let result;
    try {
        result = eval(input); // Evaluate comparison (e.g., "5 > 3", "! (5 > 10)")
        if (typeof result !== 'boolean') {
            throw new Error('Not a boolean comparison');
        }
        document.getElementById('booleanResult').innerText = `Result: ${result} (Explanation: "${input}" evaluates to ${result})`; // Display result
    } catch (error) {
        document.getElementById('booleanResult').innerText = `Error: Invalid comparison. Please enter a valid comparison like "5 > 3", "10 == 10", or "! (5 > 10)".`;
    }
    animateResult('booleanResult');
}

// Displays a console.log example
function displayConsoleLog() {
    console.log(2 + 2); // Outputs 4 to console
    document.getElementById('consoleLogResult').innerText = `Check the browser console (F12 or Ctrl+Shift+I) to see the result of 2 + 2!`;
    animateResult('consoleLogResult');
}

// Displays document.write() examples for typeof, string-number, and operators
function displayDocumentWriteExamples() {
    document.open(); // Clear the document
    document.write("<h1>document.write() Examples</h1>"); // Add heading
    // typeof example
    const myVar = "Hello"; // Define a string variable
    document.write(`<p>typeof myVar: ${typeof myVar} (Variable "Hello" is a string)</p>`); // Display type
    // String-number combination
    const combined = "Age: " + 25; // Combine string and number
    document.write(`<p>String + Number: ${combined} (Concatenates "Age: " and 25)</p>`);
    // Operator demonstrations
    document.write("<h2>Operator Demonstrations</h2>");
    document.write(`<p>==: 10 == "10" → ${10 == "10"} (Equal after type coercion)</p>`); // == operator
    document.write(`<p>===: 10 === "10" → ${10 === "10"} (Not equal due to different types)</p>`); // === operator
    document.write(`<p>>: 5 > 2 → ${5 > 2} (5 is greater than 2)</p>`); // > operator
    document.write(`<p><: 10 < 2 → ${10 < 2} (10 is not less than 2)</p>`); // < operator
    document.write(`<p>&&: 5 > 2 && 10 > 4 → ${5 > 2 && 10 > 4} (Both conditions true)</p>`); // && operator
    document.write(`<p>||: 5 > 10 || 10 > 4 → ${5 > 10 || 10 > 4} (Second condition true)</p>`); // || operator
    document.write(`<p>!: ! (5 > 10) → ${! (5 > 10)} (Negates false to true)</p>`); // ! operator
    document.close(); // Close the document
}

// Animates a result element with a bounce effect
function animateResult(elementId) {
    const element = document.getElementById(elementId); // Get element by ID
    element.classList.add('animate-bounce'); // Add bounce animation
    setTimeout(() => element.classList.remove('animate-bounce'), 1000); // Remove after 1s
}