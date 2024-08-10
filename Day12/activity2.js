// task 3
function checkIfApple(fruit){
    try {
        if(fruit.toLowerCase() == 'apple'){
            console.log("This is an Apple");
        }else{
            console.log("This is not an Apple");
        }
    } catch(erroe){
        console.error("error.message");
    } finally {
        console.log("Check Completed");
        
    }
}
checkIfApple("Apple");