// Number Check Script
function checkNumber(myNum){
    if(myNum >= 0){
        console.log("This is Positive No.",myNum);
    }else if(myNum <= 0){
        console.log("This is Negative No.", myNum);
    }else{
        console.log("No is Zero", myNum);
    }
}
checkNumber(9);


// Voting Eligibility Script
function checkAge(age){
    if(age >= 18){
        console.log("Vote De Sakte Ho !", age);
    }else{
        console.log("Vote Nhe De Sakte Ho !", age);
    }
}
checkAge(22);

// check day
function getDayName(dayNumber) {
    let dayName;
    
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number. Please enter a number between 1 and 7.";
            break;
    }
    
    console.log(dayName);
}

// Example usage
let dayNumber = 3; // You can change this value to test with different day numbers
getDayName(dayNumber);


// Grade Assignement Script
function assignGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score. Please enter a score between 0 and 100.';
            break;
    }

    console.log(`Score: ${score}, Grade: ${grade}`);
}

// Example usage
let score = 85; // You can change this value to test with different scores
assignGrade(score);


// Leap Year Check Script
function isLeapYear(year) {
    let isLeap;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true;
            } else {
                isLeap = false;
            }
        } else {
            isLeap = true;
        }
    } else {
        isLeap = false;
    }

    if (isLeap) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// Example usage
let year = 2024; // You can change this value to test with different years
isLeapYear(year);
