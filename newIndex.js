// Write a nested if-else statement to check if a student has passed an exam based on their score. 
// If they passed, determine if they scored an A, B, or C grade. If they failed, display a message "failed".
let score = 85;

if (score >= 50) {
    console.log("Passed the exam");
    if (score >= 70) {
        console.log("Grade: A");
    } else if (score >= 60) {
        console.log("Grade: B");
    } else {
        console.log("Grade: C");
    }
} else {
    console.log("Failed the exam");
}

// Use a nested if-else statement to categorize a person's age group. 
// If they are under 18, print " I am a child." If they are between 18 and 64, print " I am an adult." 
// If they are 65 or older, print "I am an old geezer."
let age = 35;

if (age < 18) {
    console.log("I am a child.");
} else if (age >= 18 && age <= 64) {
    console.log("I am an adult.");
} else {
    console.log("I am an old geezer.");
}