// ***************************DATE*******************
let myDate = new Date()
//console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

//to declare specific date 

//let myCreateDate = new Date(2025, 11, 3)
//let myCreateDate = new Date(2025, 11, 3, 5, 4)
//let myCreateDate = new Date("2025-01-14")
let myCreateDate = new Date("12-03-2025")
// console.log(myCreateDate.toLocaleString());


// to find exact time 
let myTimeStamp = Date.now()
// console.log((myTimeStamp));
// console.log((myCreateDate.getTime())); //output will be in milli-second
//console.log(Math.floor((Date.now()/1000))); //output will be in second

//other methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1 ); //it start from 0 so thats why +1
console.log(newDate.getDay());
console.log(newDate.getFullYear());



newDate.toLocaleString('default', {
    weekday: "long",
    hour:"2-digit"
})
console.log(newDate);


//  Date : Date is an object in javascript. 
// // JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// // We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
// console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
// console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

// console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
// console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
// console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z

