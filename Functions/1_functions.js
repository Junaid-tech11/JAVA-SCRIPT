

//To avoid code redundancy so we have to use function here to 



function sayMYName(){
console.log("J");
console.log("u");
console.log("n");
console.log("a");
console.log("i");
console.log("d");
}
//sayMYName  //function reference
//sayMYName() //function execution

// function addTwoNumbers (num1, num2){   //num1 and num2 are parameters
//     console.log(num1 + num2)
// }

// function addTwoNumbers (num1, num2){   //num1 and num2 are parameters
//     // let result = num1 + num2
//     // return result
    
//     //console.log('Junaid') //here console did not work because it is after the return statement
    
//     return num1 + num2  // return should have stored in any variable you can't console.log it 
// }
// const result = addTwoNumbers(3, 7)  //arguments

// console.log(result); //Output: undefined

function loginUserMessage(username ="umer") {
    //if (username === undefined) {         //both way work same
    if (!username) {
        console.log("Please Enter a Username");
        return; // Exit early
    }
    return `${username} just logged in`;
}

const result2 = loginUserMessage("ALi");
const result3 = loginUserMessage();  // Logs message, returns undefined

//console.log(result2);  // "ALi just logged in"
console.log(result3);  // undefined

