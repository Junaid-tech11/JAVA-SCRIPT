//Concepts: Basics, Truthy/Falsy (truthy.js), Control_Flow\

// //1. falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN, 

//2. truthy values:
// "0","false", " ", [],{}, function(){},

function checkValue (val) {
    if (val === 0) {
        console.log("The value is zero, which is falsy");
        
}
    else if (val){
        console.log("Truthy Value:" + val);
        
    }
    else{
        console.log('Falsy Value');
        
    }
}

//Question 2: Dynamic Greeting (Control Flow) Write a program using a switch statement 
// or if/else logic that takes a variable currentHour (0-24)
const currentDate = new Date();
const currentHour = currentDate.getHours();

if (currentHour >= 5 && currentHour <= 11) {
    console.log("Good Morning!");
} else if (currentHour >= 12 && currentHour <= 17) {
    console.log("Good Afternoon!");
} else if (currentHour >= 18 && currentHour <= 22) {
    console.log("Good Evening!");
} else {
    console.log("Good Night!");
}

//3.oop: Write a for loop that prints the 
// multiplication table for 5 (5, 10, 15... up to 50).
// We set the fixed number we want to multiply
const number = 5;

// We loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    // We print: 5 * i = result
    // Using "Template Literals" (backticks `) makes this easier to read!
    console.log(`${number} * ${i} = ${number * i}`);
}

//4.convert into arrow function
const addNumbers = (a,b) => {
    return a+b
}
console.log(addNumbers(5,9));

//5.
const cart = ["Apple", "Banana","Milk"]
cart.push("Bread")
cart.shift()
console.log(cart);

const user = {
    username:"Coder123",
    age:25,
    isloggedIn: true,
    greet(){
        return  this.username + " " + " Hello" 
    }
    
}
user.isloggedIn = false; // Access with dot notation and assign new value
console.log(user.greet()); // Don't forget to call the function to see the result!

//6.
const prices = [10, 25, 50, 100, 5];
const expensivePrices = prices.filter((num)=>{
    return num>20
})
const salePrices = prices.map((num)=>{
    return num*0.5})
const totalCost = prices.reduce((acc, curr )=>{
    return acc + curr;
},0)

console.log(expensivePrices);
console.log(salePrices);
console.log(totalCost);


//7.
let a = 10;
const b = 20;
var c = 30;

if (true) {
    let a = 40; // specific block scope
    var c = 50; // function/global scope
    console.log(a); // Output A?
}

console.log(a); // Output B?
console.log(c); // Output C?