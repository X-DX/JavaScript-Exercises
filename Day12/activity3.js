// task 4
class CustomError extends Error {
    constructor(message) {
      super(message); 
      this.name = this.constructor.name; 
    }
  }
  
  function checkValue(value) {
    try {
     
      if (value !== 'apple') {
        throw new CustomError('Input is not an apple');
      }
      console.log('It is indeed an apple!');
    } catch (error) {
     
      console.error(`${error.name}: ${error.message}`);
    } finally {
      
      console.log('Function execution completed.');
    }
  }

//   checkValue('mango'); 

// task 5
// Custom Error Class
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  function validateInput(input) {
    try {
      if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError('Input must be a non-empty string.');
      }
      console.log('Validation successful:', input);
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    } finally {
      console.log('Validation attempt completed.');
    }
  }

  validateInput('');   
//   validateInput('Hello');   
//   validateInput(123);       
  
  