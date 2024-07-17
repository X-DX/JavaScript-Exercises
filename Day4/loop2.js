// print no 1 - 10 using for loop and while loop
function loopFunc()
{
    for(let i = 1; i<=10; i++){
        console.log("for loop",i);
    }

    let j =1;
    while(j <= 10)
    {
        console.log("While Loop", j);
        j++;
    }
}

// loopFunc();

// multiplication table script
function mulFuc(num){
    for(let i=1; i<= 10;i++){
        console.log(i*num);
    }
}
// mulFuc(5);

// Pattern Printing Script
function printPattern(rows){
    for(let i =1; i<= rows; i++){
        let pattern = '';
        for(let j=1;j<=i; j++){
            pattern += "*";
        }
        console.log(pattern);
    }
}
// printPattern(5);

// 