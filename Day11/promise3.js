// task 4
async function logResolvedValue() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is the resolved value");
        }, 2000);
    });

    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// logResolvedValue();

// task 5
async function handleRejectedPromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("This is the error message from the rejected promise");
        }, 2000);
    });

    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// handleRejectedPromise();

