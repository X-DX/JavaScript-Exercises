// Task 1

function checkOddEven(num){
    if(num < 0){
        console.log("Number is Negative", num);
    }else if(num >= 0){
        console.log("Number is Positive", num);
    }
}
// checkOddEven(-5);

// Task 2
function squNum(num)
{
    let result = Math.pow(num,2);
    console.log(`Square of Number of ${num} is: ${result}`);
}
// squNum(6);

// Task 3
function maxNum(num1, num2){
    if(num1 > num2){
        console.log("num 1 is greater", num1);
    }
    else{
        console.log("num 2 is greater", num2);
    }
}

// maxNum(18,9);

// Task 4
function concateString(str1, str2){
    let resultStr = str1.concat("-",str2);
    console.log(resultStr);
}
// concateString("Arup","Roy");

// Task 5
let sumNum = () => {
    let sum = 20 + 80;
    console.log("Sum of Two Number:", sum);
}
// sumNum();

// Task 6
let checkString = (str) => {
    const check = "@";
    if(str.includes(check)){
        console.log(`The string contains the character '${check}'.`);
    }
    else {
        console.log(`The string does not contain the character '${check}'.`);
    }
}
// checkString("Arup@")

// Task 7
const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 3)); 
console.log(multiply(5));   


// Task 8
function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Alice"));
console.log(greet("Bob", 25)); 

// Task 9
function repeat(callback, times){
    for (let index = 0; index < times; index++) {
        callback();
    }
}
function sayHello(){
    console.log("Hello");
}
// repeat(sayHello,3);

// Task 10
function compose(func1, func2, value){
    const result1 = func1(value);
    const finalResult = func2(result1);
    return finalResult;
}

function squareFunc(x){
    return x * x;
}

function addFive(x){
    return x + 5;
}

const finalValue = compose(squareFunc, addFive, 2);
// console.log(finalValue);