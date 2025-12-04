const user = {
    username: "junaid",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);     //this used in current context in his scope
        console.log(this);
        
    }

}

user.welcomeMessage()
user.username = 'ALi'
user.welcomeMessage()

console.log(this); //output: {} empty because we are in node environment so 
                            // it is different for environment like browser (window) and node({})


function chai(){
    let username = 'Pakistan'
    console.log(this.username)  //here we can't use this in function

}
chai()


// const myChai= function () {
//     let username = 'Pakistan'
//     console.log(this.username);             
// }

// arrow function:  () => {}
const myChai= () =>  {
    let username = 'Pakistan'
    // console.log(this.username);      // output is also give us undefined in case of this only get empty{}
    console.log(this);             
} 

// const addnum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addnum(23,32));


//implicit return   (num1, num2) => return num1 + num2
//const direct  = (num1, num2) =>   num1 + num2

//const direct  = (num1, num2) => ( num1 + num2)   //{} used you have to write return otherwise not used return in ()

const direct  = (num1, num2) => ( {user1: "Ali"})  //Now in case of object you have to wrap your arguments in ()

console.log(direct(23,12));



const myArray = [2,3,4,5,5]

//different syntax to call value its all are correct.

// myArray.forEach(function name(params) {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())