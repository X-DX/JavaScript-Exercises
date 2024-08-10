// task 1
function throwError() {
    throw new Error("This is an intentional error");
}

function handleError(){
    try{
        throwError();
    } catch(error){
        console.log("An Error occurred",error.message);
        
    }
}

// handleError();

// task 2
function divideNumber(numerator, denominator) {
    if(denominator === 0){
        throw new Error("Error by zero is not allowed");
    }
    return numerator / denominator;
}

function safeDivision(numerator, denominator) {
    try{
        const result = divideNumber(numerator, denominator);
        console.log(`The Result is: ${result}`);
    } catch (error) {
        console.log("An error occurred:", error.message);
    }
}
// safeDivision(10, 2);