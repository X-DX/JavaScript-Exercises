// Task 1
let name = "Arup";
let age = 28;

// console.log(`Name is: ${name} and Age is: ${age}`);

// Task 2
const multiLineString = `
Hello, ${name}!
This is a multi-line string with a variable.
`;
// console.log(multiLineString);

// Task 3
let arr = [1,2,3,4,5,6,7,8,9,10];
let Extarr = [arr1,arr2,...other] = arr;
// console.log(`${arr1}, ${arr2}, ${other}`);

// Task 4
const person = {
    name1: 'Frank',
    age2: 50,
    city: 'Miami',
    country: 'USA'
};
const {name1, age2, ...rest } = person;
// console.log(`${name} n ${age}`);

// Task 5
const array = [1,2,3]
const newArr = [0, ...array, 4];
// console.log(newArr);

// Task 6
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// console.log(sum(1,2,3));

// Task 7
function multiply (a,b=1){
    return a * b;
}

// call both
// console.log(multiply(2,2));

// call only 1
// console.log(multiply(5));

// Task 8
function createPerson(name, age, job = "unknnown"){
    return {
        name,
        age,
        job,
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
}
const person1 = createPerson("Arup",28,"Software Devloper");
// console.log(person1);
// person1.greet();

// Task 9
// Define the variables for computed property names
const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';
const key4 = 'jobTitle';

// Create the object with computed property names
const person3 = {
  [key1]: 'John',
  [key2]: 'Doe',
  [key3]: 30,
  [key4]: 'Developer'
};

// Log the object to the console
// console.log(person3);
