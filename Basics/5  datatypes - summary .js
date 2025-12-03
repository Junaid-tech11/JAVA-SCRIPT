// there are 2 data types in JS : 
//Primitive & Non-Primitive



//1.primitive: it is defined as call by value its changes not happen in memory but in copy
//7 categories: String, Number, Boolean, null(empty), undefined, Symbol(unique value), BigInt(big values)

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // empty
let userEmail; //value is undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //output : false 

const bigNumber = 222222222222758432n





//2. Non-Primitive(Reference): its reference located in memory
// Array, Objects , Functions

const heros = ['umer', 'ali','asad'] ///array

//object
let myObj = {
    name:"junaid",
    age: 323,
}

const myFunction = function(){
    console.log("Hello ");
    
}

//to find the type of any value
console.log(typeof myFunction);




//Js is dynamic typed language: its mean we don't need to defined type of variable const score = 100 (don't need to type Number)

// https:262.ecma-international.org/5.1/#sec-11.4.3