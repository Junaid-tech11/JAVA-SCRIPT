const myNumbers = [1,2,3,4,5,6,7,8,9]

// //it is also call back function
// const newNum  = myNumbers.map((num) => num +12)
// console.log(newNum); 


// //whenever scope is defined we have to return the value
// const newNum2 = myNumbers.map((num)=>{
//     return num+5
// })
// console.log(newNum2);

//it is chaining process it works step by step.
const newNums = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)    //map will return every thing whatever explicitly or implicitly
                        .filter((num)=> num > 40)  //filter is more about true and false 
console.log(newNums);
