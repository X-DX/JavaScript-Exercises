// Task 1
for (let index = 0; index <= 10; index++) {
    console.log(index);
}

// Task 2
for (let i = 0; i <= 10; i++) {
    console.log(i * 5);
}

// Task 3
let number = 1;
let sum = 0;
let sumString = '';

while (number <= 10) {
    sum += number;
    sumString += number;
    if (number < 10) {
        sumString += '+';
    }
    number++;
}

console.log(`${sumString} = ${sum}`);

// Task 4
let revNo = 10;
while(revNo >= 1){
    console.log(revNo);
    revNo--;
}

// Task 5
let checkNo = 1;
do{
    console.log(checkNo);
    checkNo++;
}while(checkNo <= 5);

// Task 6
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    let result = 1;
    let i = n;

    do {
        result *= i;
        i--;
    } while (i > 0);

    return result;
}

// Example usage
let number1 = 5; // You can change this value to test with different number1s
console.log(`The factorial of ${number1} is ${factorial(number1)}`);


// Task 7
function printPattern(rows){
    for(let i =1; i<= rows; i++){
        let pattern = '';
        for(let j=1;j<=i; j++){
            pattern += "*";
        }
        console.log(pattern);
    }
}
printPattern(5);

// Task 8
for (let number = 1; number <= 10; number++) {
    if (number === 5) {
        continue; // Skip the rest of the loop body for this iteration
    }
    console.log(number);
}


// Task 9
for (let k = 1; k <= 10; k++)
{
    if(k == 7)
    {
        break
    }
    console.log("Break Point", k);
}