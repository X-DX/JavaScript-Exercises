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


// Task 4
let today = new Date().getDay();
// console.log(today);
switch(today){
    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("wednesday");
        break;
    
    case 4:
        console.log("Thurday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Satarday");
        break;

    default:
        console.log("No Day");
}

// Task 5
function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        case (score >= 50):
            grade = 'E';
            break;
        default:
            grade = 'F';
            break;
    }

    return grade;
}

// Example usage:
let score = 85;
let grade = getGrade(score);
console.log(`The grade for a score of ${score} is ${grade}.`); // Outputs: The grade for a score of 85 is B.


// Task 6
function checkOddEven(number) {
    return (number % 2 === 0) ? 'Even' : 'Odd';
}

// Example usage:
let number = 5;
console.log(`The number ${number} is ${checkOddEven(number)}.`); // Outputs: The number 5 is Odd.


// Task 7
function isLeepYear(year){
    if((year % 4 && year & 100 !== 0) || (year % 400 === 0)){
        return true;
    }else{
        return false;
    }
}

let year = new Date().getFullYear();
// console.log(year);
if(isLeepYear(year)){
    console.log(`${year} is a leep year`);
}else{
    console.log(`${year} is not a not yaer`);
}