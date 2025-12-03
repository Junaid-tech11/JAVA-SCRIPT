//There are two types of memory :
// Stack Memory, Heap Memory
//Stack (is used in Primitive Type): when this is used we get a copy of value 
//Heap (is used in Non-Primitive Type): when this is used we get a reference of value its changes occur in original value

//example of Stack its original value does not change its copy will be change
let myYoutube = "Code With Junaid"

let anothername = myYoutube
anothername = 'debug with me'
console.log(myYoutube);
console.log(anothername);


// Heap Memory : it give reference to the value new variable will  be created in stack its reference would be directed to heap
let user_1 ={
    email: 'user@google.com',
    number:23414412123
}
let user_2 = user_1
user_2.email = "example.com"
console.log(user_1.email);
console.log(user_2.email);
//it values only  change   if we change in its original value otherwise it remain same for both w
