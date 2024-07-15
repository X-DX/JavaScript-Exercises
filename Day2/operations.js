// Arithmatic Operations
// Task 1
console.log("Add two number",9+2);

// Task 2
console.log("Subtract two number",9-2);

// Task 3
console.log("Multiple two number",9*2);

// Task 4
console.log("Division two number",20 / 2);

// Task 5
console.log("Reminder of two number",19 % 2);

// Assignment Operators
// Task 6
let a = 10;
a += a;
console.log("Task 6", a);

// Task 7
let b = 10;
b -= b;
console.log("Task 7", b);

// Comparision Operators
// Task 8
let x = 100;
let y = 200;
if(x > y){
    console.log("X Grater:", x);
}else if(x < y){
    console.log("Y Grater:", y);
}

// Task 9
let a2 = 10;
let b2 = 5;
let c2 = 10;

console.log(a2 >= b2);  
console.log(a2 >= c2);  
console.log(b2 >= a2);  


let x2 = 3;
let y2 = 7;
let z2 = 3;

console.log(x2 <= y2); 
console.log(x2 <= z2);  
console.log(y2 <= x2);  

// Task 10
let aa = "Arup"
console.log("==",aa == "Arup");

let bb = 10;
let cc = "10";
console.log("===",bb === cc);

// Task 11
let isLoggin = true;
let userName = "Arup";
if( isLoggin == true && userName != ''){
    console.log("Login Successfully");
}

// Task 12
let appStatus = "Submitted";
let userRole = "DA";
if(appStatus == "Submitted" || userRole == "DA"){
    console.log("Application is Under Process");
}

// Task 13
let ageMy = 10;
if(!ageMy){
    console.log("Age is empty");
}
else{
    console.log("Age is not empty");
}

// Task 14
let myNum = -2;
console.log(myNum > 0 ? "The number is positive." : (myNum < 0 ? "The number is negative." : "The number is zero."));

