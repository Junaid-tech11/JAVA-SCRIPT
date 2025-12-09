//logics is also known as control flow
//control flow is the order in which the computer executes statements in a script
//there are different control flow statements in javascript

//1. if statement
let age = 18;
if (age >= 18) {
//    console.log("You are an adult.");  //if condition is true so the code execute will be execute under the scope in false it skips the scope and come out of the code

}

const isUserloggedIn = true
const temperature = 40


if (isUserloggedIn){


}

// if (temperature === 40){
//     console.log("Less than 50");
    
// }  else{
//     console.log("temperature is greater than 50");
// }

//comparison operator:
// <, >, >=, <=, , == , !=, ===(check the datatype of value), !==(it checks negative sign)

// const score = 200
// if (score >100) {
//     const power = "Fly"  //its scope is local, but in var it is global scope
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`); //here we got error of power is undefined because in const its scope is only within the {}


if (2 === "2"){
    //console.log(" Code Executed");
    
}


if (2!=1){
    //console.log('executed');
    
}

//shorthand notation

const balance = 1000

//if (balance >500) console.log("test"); //it is known as emplicit scope we doesn't define any scope


//nesting 
// if (balance < 500){
//     console.log("less than ");
// } else if(balance < 750){
//     console.log("Less than 750");
    
// } else if (balance < 950){
//     console.log('less than 900' );
    
// } else {
//     console.log("Less than 1200");
    
// }

const userLogged = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false


if (userLogged && debitCard && 2==2) {              //&& it represent and operator
    console.log("Allow to buy Course");             //any of them is false nothing works

}   if (loggedInFromGoogle || loggedInFromEmail  ) {                   //|| Iit represent or operator
    console.log("User logged in ");
    
}
