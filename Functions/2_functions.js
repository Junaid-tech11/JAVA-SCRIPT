//to calculate unknown arguments

function calculateCartPrice (val1, val2, ...num1){   // ... is called rest operator so it collect all the arguments
    return num1                                      //val1 and val2 also store values and rest of value store in array
}
console.log(calculateCartPrice(233,45,23,523,545,23424,2342));  //now there is problems we have many arguments but only have 1 parameters to solve this 


// to handle object
const user = {
    username:"ALi",
    price:990
    
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"Umer",
    price:121
})


//to handle array
const myNewArray =[12,12,34,45]

function secondValue (getarray){
    return getarray[1]
}
// console.log(secondValue(myNewArray));
console.log(secondValue([233,4545,645]));
