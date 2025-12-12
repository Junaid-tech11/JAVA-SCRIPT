// const coding = ["Js","C","java"]

// const values = coding.forEach((item) =>{
//     //console.log(item);
//     return item
// })
// console.log(values); //for each will never return any value 


const myNums = [1,2,3,45,65,76]

//const newNums = myNums.filter((num) => num >50)  //filter return us the value but in case of for each it does not return the value
//console.log(newNums);  //filter has callback value it can access every single value and we have to define the condition

// //other way to write the filter :
// const newNums = myNums.filter(  (num) =>  {
//     return num > 4
// })  // remember always write return whenever you explicitly defined {} in filter 
// console.log(newNums);


//both way are right to check the condition you can used any of them

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>50){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 150 }
];

const budgetFriendly = products.filter(item => item.price >= 50 
    && item.price < 200);
console.log(budgetFriendly);




// 🧠 Challenge Mode: Try these yourself!
// Here are three problems for you to code.

// Challenge A: The Voter Check Given an array of ages: [15, 22, 18, 12, 60, 17].
//  Create a new array containing only those eligible to vote (18 or older).

ages=[15, 22, 18, 12, 60, 17]
const voters = ages.filter((age) => age >= 18);
console.log(voters);


const menu = [
    { name: "Pizza", category: "food" },
    { name: "Beer", category: "drink" },
    { name: "Salad", category: "food" },
    { name: "Water", category: "drink" }
];
const food = menu.filter((item) => {
    return item.category === "food"
})
console.log(food);
