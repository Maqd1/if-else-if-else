// Write an if-else -if-else block that checks if a variable num is a positive number, a negative number,
// or zero.Print "Positive" if num is positive, "Negative" if num is negative, and "Zero" if num is zero.
let num = 1;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Write an if-else -if-else block that checks if avariable num is even or odd.If num is even, print
// "Even"; otherwise, print "Odd".
let num2 = 9;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Write an if-else-if-else block that checks if a variable age is a multiple of 5, a multiple of 3,
// or neither.Print "Multiple of 5" if age is a multiple of 5, "Multiple of 3" if age is a multiple of 3, and
// "Neither" if age is neither a multiple of 5 nor a multiple of 3.
let age = 45;
if (age % 5 === 0) {
    console.log("Multiple of 5");
} else if (age % 3 === 0) {
    console.log("Multiple of 3");
} else {
    console.log("Neither");
}

// Write an if-else-if-else block that checks if a given year is in the 20th,21st, or 22nd century.
// Print "20th century" for years between 1901 and 2000,"21st century" for years between 2001 and 2100, 
// and "22nd century" for years between 2101 and 2200.
let year = 2050;
if (year >= 1901 && year <= 2000) {
    console.log("20th century");
} else if (year >= 2001 && year <= 2100) {
    console.log("21st century");
} else if (year >= 2101 && year <= 2200) {
    console.log("22nd century");
} else {
    console.log("Not in specified centuries");
}

// Write an if-else-if-else block that determines the value of a variable result based on the value of another variable value.
// If value is less than 10, set result to 0; if value is between 10 and 50(inclusive), 
// set result to 1; if value is between 51 and 100(inclusive), set result to 2; otherwise, set result to 3.
let value = 75;
let result;

if (value < 10) {
    result = 0;
} else if (value >= 10 && value <= 50) {
    result = 1;
} else if (value >= 51 && value <= 100) {
    result = 2;
} else {
    result = 3;
}

console.log("Result:", result);

