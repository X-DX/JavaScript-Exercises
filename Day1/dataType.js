//! Day 1: Variable and Data Types

//? Activity 1: Variable Declaration

// Task 1 : Declare a varibale using var, assign it a number, and log the value to the console
var userAge = 10;
console.log("User Age:", userAge);

// Task 2: Declare a varibale using let, assign it a string, and log the value to the console
let userName = "Arup";
console.log("User Name:", userName);

//? Activity 2: Constant Declaration

// Task 3: Declare a varibale using const, assign it a boolean, and log the value to the console
const userGender = true;
console.log(userGender);

//? Activity 3: Data Type

// Task 4: Create varibale of different data type (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const phoneNo = 8732076888;
console.log(typeof phoneNo);

const NameCompany = "Google";
console.log(typeof NameCompany);

const learnJavaScript = true;
console.log(typeof learnJavaScript);


const language = {
    subject : "C",
    chapeter: "1"
}
console.log(typeof language);

const emp = ["Arup","Sam"]; // object (arrays are a special type of object in JavaScript)
console.log(typeof emp);
console.log(Array.isArray(emp));

//? Activity 4: Reassigning Variable

// Task 5: Declear a variable using let, assign it an initial value, reassign a new value, and log both value to the console

// case 1:
let myNum = 10;
console.log(myNum);

myNum = 20;
console.log(myNum);

// case 2:
let checkNum = 90;
console.log("Global Scope:", checkNum);

{
    let checkNum = 100;
    console.log("Block Scope", checkNum);
}

console.log("Again Global Scope", checkNum);

//? Activity 5: Understanding const

// Task 6: try ressigning a varible declared with const and observe the error
const gameName = "valorant";
console.log(gameName);

//gameName = "CSGO"  // TypeError: Assignment to constant variable.
//console.log(gameName);

// The error "TypeError: Assignment to constant variable." occurs when you attempt to reassign a value to a variable that has been declared with const in JavaScript. 
// The const declaration creates a constant reference to a value, which means the reference to the value cannot be changed


//? Feature Request
// 1. Variable Types console Log: Write a script that declares variable of different data types and logs both the value and type of each variable to the console.

const printValueType = (variable) => {
    console.log("Value:", variable, ", Type:", typeof variable);
}

const variables = [
    "Hello, World!",
    42,         
    true,            
    { name: "Alice", age: 30 },
    [1, 2, 3, 4, 5],   
    null,            
    undefined
];

variables.forEach(printValueType);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment
// Function to demonstrate reassignment behavior with inputs

function demoReassignment(letValue, constValue) {
    let myLetVariable = letValue;
    console.log("Before reassignment (let):", myLetVariable);
    myLetVariable = "New Value";
    console.log("After reassignment (let):", myLetVariable); 
    const myConstVariable = constValue;
    console.log("Before reassignment (const):", myConstVariable); 
    try {
        myConstVariable = "Attempting to Reassign";
    } catch (error) {
        console.log("Error when trying to reassign const:", error.message);
    }
}
demoReassignment("Initial Value", "Constant Value");
