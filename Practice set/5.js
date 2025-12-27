function calculateTotalPrice(items) {   
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
const items = [
    { name: "apple", price: 2, quantity: 3 },
    { name: "banana", price: 1, quantity: 5 },
    { name: "orange", price: 3, quantity: 2 }
];
const totalPrice = calculateTotalPrice(items);
console.log("Total Price:", totalPrice); 
// what will the following print in Js?
console.log("har/".length);
//explore the includes, startswith , ends with functions of a string?
const greet = "Hello, I am computer science student from Virtual Uni of pakistan."
console.log(greet.length);
console.log(greet.includes("Hello"));    