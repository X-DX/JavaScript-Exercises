// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();

let dayOfWeekIndex = currentDate.getDay();
let dayOfWeekName = daysOfWeek[dayOfWeekIndex];

console.log(`Sample Output : Today is : ${dayOfWeekName}`);

let options = { timeZone: 'Asia/Kolkata' };
console.log(currentDate.toLocaleTimeString('en-IN', options));


