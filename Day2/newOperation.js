function logics(num1, num2)
{
    console.log("Add", num1 + num2);

    console.log("Subtrct", num1 - num2);

    console.log("Multiply", num1 * num2);

    console.log("Division", num1 / num2);

    console.log("Reminder", num1 % num2);

}

// logics(10,2)

// task2
// Comparison functions
const isEqual = (a, b) => a == b;
const isStrictEqual = (a, b) => a === b;
const isNotEqual = (a, b) => a != b;
const isStrictNotEqual = (a, b) => a !== b;
const isGreaterThan = (a, b) => a > b;
const isLessThan = (a, b) => a < b;
const isGreaterThanOrEqual = (a, b) => a >= b;
const isLessThanOrEqual = (a, b) => a <= b;

// Logical functions
const andCondition = (cond1, cond2) => cond1 && cond2;
const orCondition = (cond1, cond2) => cond1 || cond2;
const notCondition = (cond) => !cond;

// Function to log comparison results
const logComparisonResults = (num1, num2) => {
  console.log("Comparing num1 and num2:");
  console.log(`num1: ${num1}`);
  console.log(`num2: ${num2}`);

  console.log(`num1 == num2: ${isEqual(num1, num2)}`);
  console.log(`num1 === num2: ${isStrictEqual(num1, num2)}`);
  console.log(`num1 != num2: ${isNotEqual(num1, num2)}`);
  console.log(`num1 !== num2: ${isStrictNotEqual(num1, num2)}`);
  console.log(`num1 > num2: ${isGreaterThan(num1, num2)}`);
  console.log(`num1 < num2: ${isLessThan(num1, num2)}`);
  console.log(`num1 >= num2: ${isGreaterThanOrEqual(num1, num2)}`);
  console.log(`num1 <= num2: ${isLessThanOrEqual(num1, num2)}`);

  console.log(`(num1 > num2) && (num1 != num2): ${andCondition(isGreaterThan(num1, num2), isNotEqual(num1, num2))}`);
  console.log(`(num1 < num2) || (num1 === num2): ${orCondition(isLessThan(num1, num2), isStrictEqual(num1, num2))}`);
  console.log(`!(num1 === num2): ${notCondition(isStrictEqual(num1, num2))}`);
};

// Call the function with two numbers
logComparisonResults(10, 5);


// task 3
// Function to determine if a number is positive, negative, or zero
const checkNumber = (num) => {
    return num > 0 ? "The number is positive." : (num < 0 ? "The number is negative." : "The number is zero.");
};

// Example numbers to test
let number1 = 10;
let number2 = -5;
let number3 = 0;

// Log the results
console.log(`Number 1 (${number1}): ${checkNumber(number1)}`);
console.log(`Number 2 (${number2}): ${checkNumber(number2)}`);
console.log(`Number 3 (${number3}): ${checkNumber(number3)}`);
