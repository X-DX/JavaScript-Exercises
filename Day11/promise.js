// Task 1
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved message after 2 seconds");
    }, 2000);
});

// myPromise.then((message) => {
//     console.log(message);
// });

// Task 2
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is the rejected message after 2 seconds");
    }, 2000);
});

// myPromise2.catch((message) => {
//     console.log(message);
// });




