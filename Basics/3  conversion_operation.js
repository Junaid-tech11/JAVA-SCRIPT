// let score = "33adsf"
// console.log(typeof score);
// console.log(typeof (score));


// let valueNumber = Number(score)
// console.log( valueNumber)  //NaN : it is also a number it don't gives value it value is converted

// // let num = null
// let num = undefined
// console.log(undefined)

// let bool = true
// console.log(bool)

// //Imp Notes:
// //"33"=> 33
// //"33abs"=> NaN : after conversion it has some value
// //true=> 1; false=> 0
// // ""=> false
// //"Junaid"=> true

// //let isLoggedIn = 1
// let isLoggedIn = "" //this will give false in empty

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)


// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);  //output: 33 but its type is string
// console.log(typeof stringNumber); // string type


//*************************Operations******************************* */

let value = 3
let negative = -value
//console.log(negative);

// console.log(2+2);
// console.log(2-2);
// console.log(2**2);
// console.log(2/2);
// console.log(2*2);
// console.log(2%2);

let str1 = "Hello "
let str2 = "World"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 +2); //output: 122
// console.log(1 + 2 +"2"); // output : 32


// console.log((1 + 2) * 5 %3 ); // correct code

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//If used postfix, with operator after operand (for example, x++),
//the increment operator increments and returns the value 
//before incrementing.

// If used prefix, with operator before operand
// (for example, ++x), the increment operator increments and returns the value
// after incrementing.
