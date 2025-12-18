// //it is literal object
// const user = {
//     user:'ali',
//     loginCount:9,
//     signedIn: true,


//     getUserDetails: function(){
//         //console.log("GOt user details from DB");
//         //console.log(`username:${this.user}`);
//         console.log(this); //output:Above context
        
//     }

// }

// console.log(user.loginCount);
// //console.log(user.getUserDetails());
// console.log(this);  //output:{}


//Constructor function

//new is an constructor function:it allows we can make multiple object/instance from this new context
//const promiseOne = new Promise((resolve, reject) => {})

function User(username,loginCount, isLoggedIn){
    this.username = username;    //left side is variable(this.username)
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (params) {
        console.log(`Welcome ${this.username}`);
        
    }
    //return this it is 
}

const userOne = new User('ALi', 10, true)
const userTwo = new User('umer', 4, false)  //here value will be override in userTwo.
console.log(userOne);
console.log(userTwo);
//importance of newKeyword:
// whenever new is used {} is created
// constructor function is called through new and packed the arguments
// this keyword store the arguments from the above function
//so we get the output

