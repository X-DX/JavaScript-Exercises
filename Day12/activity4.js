// task 6
function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();

      if (randomNumber > 0.5) {
        resolve('Promise resolved successfully!');
      } else {
        reject('Promise rejected.');
      }
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  