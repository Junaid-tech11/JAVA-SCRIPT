//reduce: This method executes a reducer function (that you provide)
//  on each element of the array, resulting in a single output value.
//Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

const myNums = [1,2,3];

const myTotal = myNums.reduce(function (acc,currval)  {
    console.log(`acc: ${acc}  currval: ${currval}`);
    
    return acc + currval;
},0); //0 is the initial value of acc
console.log(myTotal); 

const myNums2 = [5,10,15];
    
const myTotal2 = myNums2.reduce( (acc,currval) =>  acc + currval ,0);
console.log(myTotal2);      

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;  //accumalator is the total value returned after each iteration  
//                                         //currentValue is the current element being processed in the array
// }, 0);                                  // 0 is the initial value for the accumulator

// console.log(sum); // Output: 15

// // Example 2: Using reduce to find the maximum value in an array
// const values = [10, 5, 8, 20, 3];
// const max = values.reduce((accumulator, currentValue) => {
//     return Math.max(accumulator, currentValue);
// }, values[0]); // Initial value is the first element of the array

// console.log(max); // Output: 20

const shoppingCart = [
    {item: 'phone', price: 699},
    {item: 'laptop', price: 999},
    {item: 'tablet', price: 499}
];  
const totalPrice = shoppingCart.reduce( (acc, currval) =>
acc + currval.price ,0);
console.log(`Total Price: $${totalPrice}`);