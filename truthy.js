//const userEmail = 'JU@gma.ai'
const userEmail = [] //empty array will give us true value 
//const userEmail = ''  //empty string will give us false value

// //1. falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN, 

//2. truthy values:
// "0","false", " ", [],{}, function(){},



if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't Get User Email...");
    
}

//
if (userEmail.length === 0){
    console.log("Array is empty!!");
    
}

const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log("Object is empty");
    
}

//More info about 
//false ==0 => true
//false =='' => true
//0 =='' => true

//logical operators:
// &&(ANd), ||(Or)

// Nullish coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ??   //its checks the null if null present it can give us value or value both depends on condition

// val1 = undefined ?? 15  
val1 = null ?? 50 ?? 12


console.log(val1);  // 5 will be stored here this operator gives us 2 values like (null, undefined ,value


//terniary operator:

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log
("More than 80");

