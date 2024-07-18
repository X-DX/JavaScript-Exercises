// Task 1
let myarr1 = [1,2,3,4,5];
console.log("My Array 1", myarr1);

// Task 2
console.log("First Element", myarr1[0]);
console.log("Last Element", myarr1[myarr1.length-1]);

// Task 3
console.log("Original Array:",myarr1);
myarr1.push(6);
console.log("New Array Push:",myarr1);


// Task 4
myarr1.pop();
console.log("New Array POP:",myarr1);


// Task 5
myarr1.shift();
console.log("New Array Shift:",myarr1);


// Task 6
myarr1.unshift(0);
console.log("New Array Unshift:",myarr1);

// Task 7
const number = [1,2,3,4,5];
const doubleNumbers = number.map(number => number * 2);
console.log("Map",doubleNumbers);

// Task 8
const newNum = [1,2,3,4,5,6,7,8,9,10];
const evenNum = newNum.filter(newNum => newNum % 2 === 0);
console.log("Filter", evenNum);

// Task 9
const numbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}

console.log("Reduce", numbers.reduce(getSum, 0));