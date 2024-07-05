// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// get the current date and time
var today = new Date();
// console.log(today);

// get the day of the week
var day = today.getDay();
// console.log(day);

// array of day name
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// display the current day
console.log("Today is: " + dayList[5] + ".");

// ******

// get the current hour, minute and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getMinutes();

// 
// determine if its AM or PM
var prepand = (hour >= 12) ? "PM" : "AM";

// convert 24 hour format to 12 hour format
hour = (hour >= 12) ? hour - 12 : hour;

// check for special cases when hour is 0
if(hour === 0 && prepand === "PM")
{
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "Noon";
    }else{
        hour = 12;
        prepand = "PM";
    }
}

if(hour === 0 && prepand === "AM"){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "Midnight"
    }else{
        hour = 12;
        prepand = "AM"
    }
}

console.log("Current Time: " + hour + prepand + ":" +minute + ":" +second);