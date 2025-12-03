// //*******************Numbers****************** */
// const score = 400  
// console.log(score);

// //We are explicitly calling data type Number and in above case js detects automatically
// const balance = new Number(1000)
// console.log(balance); // Output: Number:100 have limited prototype let see below:

// console.log(balance.toString().length); // Output: its type change to string so it behave in a string way 
// console.log(balance.toFixed(2));  //output: 1000.00 its give only 2 fixed value it can be any value 


// const otherNumber = 1123.324434
// console.log(otherNumber.toPrecision(3)); //output : 123 because round off the value as we give the argument of 3 so it will give us 3 precise digits

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //from this you can take output in your country currency like 100,1000 etc


// //*******************MATHS****************** */
// // it is by-default library in JS
// console.log(Math);
// console.log(Math.abs(-4)); //output : it converts the sign from - to +
// console.log(Math.round(234.7443)); //output It wil round of the value 
// console.log(Math.ceil(4.2)); /// this will round off to bigger than number 4 to 5
// console.log(Math.floor(4.6)); //this will round off to lower or same  number 4 to 4
// console.log(Math.sqrt(25));
// console.log(Math.pow(25, 2));
// console.log(Math.min(2,312,23,4555,234));
// console.log(Math.max(2,312,23,4555,234));

// console.log(Math.floor(Math.random()*10 )+1); // it value always between 1 & 0 by using this we can avoid 0 and get value from 1 to onward

// //here we apply some formula to get value 
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * (max-min +1) + min));





// practice session
function OTp() {
    let max = 100000;
    let min = 999999;
    let otp = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(otp);
}

OTp();

// A granular detail that someone may miss while watching the video. Math.random() returns values 0 to 1 where 0 is inclusive but 1 is excluded.
