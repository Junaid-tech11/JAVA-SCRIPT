// //array
const myArr = [0, 1, 2, 3, 4, 5] //it is array with elements with different datatypes
// //js is mutable it can store any value int, string, bool
// //we can find any element from indexes it start from "0"
// //it always make shallow copies during Array-copy operations.
// //shallow copy of an object is a copy whose properties share the same reference 
// //Deep copy of an object is a copy whose properties doesn't share the same reference 
// //There are lot of methods in array let figure out;

const myFriend = ['umer', 'ali', 'ahsan']  //in array it value store in key pair like 1:'ali' and so on 
console.log(myFriend);

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[4]);

//Array methods
myArr.push(6)       //it adds value to array 
myArr.pop()         //it removes the value from last 
myArr.unshift(9)    // it will insert value in start but its not a good method 
myArr.shift()       // it will remove the first value in array

console.log(myArr.includes(9)) //it will check the value to find out and datatype will be boolean
console.log(myArr.indexOf(10)) // if value does not exist in array its output be -1 but if value is present it wil give the value 

const newArr = myArr.join()   //its output would be in 1,2,3,4,5 its type would be changed by using join() and converts into string
console.log(myArr)
console.log(newArr)


//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)  // it returns the section from array 1, 3 last would be not included in output


console.log(myn1);
console.log("B", myArr);

// splice and slice: slice returns the section and splice works in opposite way it discard the section from array

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


