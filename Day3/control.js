// Task 1
// Function to determine if a number is positive, negative, or zero
const checkNumber = (num) => {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
};

// Example numbers to test
let number1 = 10;
let number2 = -5;
let number3 = 0;

// Log the results
console.log(`Number 1 (${number1}): ${checkNumber(number1)}`);
console.log(`Number 2 (${number2}): ${checkNumber(number2)}`);
console.log(`Number 3 (${number3}): ${checkNumber(number3)}`);


// Task 2
// Function to check if a person is eligible to vote
const checkEligibility = (age) => {
    if (age >= 18) {
        return "The person is eligible to vote.";
    } else {
        return "The person is not eligible to vote.";
    }
};

// Example ages to test
let age1 = 20;
let age2 = 16;

// Log the results
console.log(`Age 1 (${age1}): ${checkEligibility(age1)}`);
console.log(`Age 2 (${age2}): ${checkEligibility(age2)}`);


// Task 3
// Function to find the largest of three numbers
const findLargest = (num1, num2, num3) => {
    let largest;

    if (num1 >= num2) {
        if (num1 >= num3) {
            largest = num1;
        } else {
            largest = num3;
        }
    } else {
        if (num2 >= num3) {
            largest = num2;
        } else {
            largest = num3;
        }
    }

    return `The largest number is ${largest}.`;
};

// Example numbers to test
let number11 = 10;
let number22 = 25;
let number33 = 15;

// Log the results
console.log(`Numbers are: ${number11}, ${number22}, ${number33}`);
console.log(findLargest(number11, number22, number33));
