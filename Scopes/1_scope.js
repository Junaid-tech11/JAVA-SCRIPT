

{} //now here it is called scope in function and loops etc

//var c = 300     // now here it is problem in var it wil print the block scope 
let a = 300       //in case of a now both a have different scope global and block scope



if (true){  
let a =23           // let and const are hoisted in block memory  so can't access outside the block or etc
//var c = 12         //var are hoisted in global memory it can accessible outside the function or loop
console.log("INNER: ", a);

}


console.log(a);

/* `console.log(c);` is attempting to log the variable `c` to the console. However, `c` is not defined
in the current scope, so this will result in a ReferenceError. */

