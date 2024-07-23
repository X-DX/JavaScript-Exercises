// Task 7
async function fetchData() {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// fetchData();

// Task 8
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });

