// //for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// // It provides a simpler and more readable syntax compared to traditional for loops when working with collections.
// // In this example, we will print each element of an array using a for..of loop.
// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// const arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (const num of arr) {
//     sum += num;
// }   
// console.log("Sum:", sum);


// //difference between iterators and iterables
// // An iterable is an object that implements the @@iterator method, which returns an iterator.examples of iterables include arrays, strings, maps, and sets.
// // An iterator is an object that provides a next() method that returns the next value in the sequence.  examples of iterators include 
// // the objects returned by the @@iterator method of iterables.

// const greeting = "Hello world"; // String is an iterable object
// for (const char of greeting) {  // using for..of loop to iterate over the string
//     if (char === " ") {
//         continue; // skip spaces
//     }
//     console.log(char);
// }

// const mySet = new Set([1, 2, 3, 4, 5]); // Set is an iterable object duplicate values are not allowed 
// for (const value of mySet) {  // using for..of loop to iterate over the Set
//     console.log(value);
// }   

//Maps  
const map = new Map();  // Map is an iterable object that stores key-value pairs and allows keys of any type
map.set("name", "Alice");  //it stores the values in the order of insertion and don't allow duplicate keys   
map.set("age", 30);
map.set("city", "New York");    
//console.log(map);

for (const [key, value ] of map) {
    //console.log(key, ":", value );
    
}

const myobject = {a: 1, b: 2, c: 3};    // Object is not an iterable object
// to iterate over the properties of an object using for..of loop we can use Object.entries() method
for (const [key, value] of Object.entries(myobject)) {
    console.log(key, ":", value);
}