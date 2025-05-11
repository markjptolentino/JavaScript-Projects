// Concatenates multiple strings into a single sentence
function fullSentence() {
    const part1 = "I am ";
    const part2 = "learning ";
    const part3 = "JavaScript ";
    const part4 = "string methods!";
    const wholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
}

// Extracts a section of a string using slice()
function sliceMethod() {
    const sentence = "All work and no play makes Johnny a dull boy.";
    const section = sentence.slice(27, 33); // Extracts "Johnny"
    document.getElementById("slice").innerHTML = section;
}

// Converts a string to uppercase using toUpperCase()
function upperCaseMethod() {
    const text = "make javascript fun!";
    const upperText = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = upperText;
}

// Finds the position of a substring using search()
function searchMethod() {
    const text = "Locate the word JavaScript in this sentence.";
    const position = text.search("JavaScript");
    document.getElementById("search").innerHTML = `Found at position: ${position}`;
}

// Converts a number to a string using toString()
function stringMethod() {
    const number = 182;
    const stringNumber = number.toString();
    document.getElementById("numbers_to_string").innerHTML = `String: ${stringNumber}`;
}

// Formats a number to a specified precision using toPrecision()
function precisionMethod() {
    const number = 12938.3012987376112;
    const preciseNumber = number.toPrecision(10);
    document.getElementById("precision").innerHTML = `Precise: ${preciseNumber}`;
}

// Formats a number with a fixed number of decimals using toFixed()
function fixedMethod() {
    const number = 123.456789;
    const fixedNumber = number.toFixed(2);
    document.getElementById("fixed").innerHTML = `Fixed: ${fixedNumber}`;
}

// Returns the primitive value of a number using valueOf()
function valueOfMethod() {
    const number = new Number(42);
    const primitiveValue = number.valueOf();
    document.getElementById("valueof").innerHTML = `Primitive Value: ${primitiveValue}`;
}