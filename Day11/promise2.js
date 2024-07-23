// Task 3
const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 1");
    }, 1000);
});

const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 2");
    }, 2000);
});

const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data from server 3");
    }, 3000);
});

fetchData1
    .then((data) => {
        console.log(data);
        return fetchData2;
    })
    .then((data) => {
        console.log(data);
        return fetchData3;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
