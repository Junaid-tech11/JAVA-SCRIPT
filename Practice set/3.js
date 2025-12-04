// what will the following print in Js?
console.log("har/".length);

//explore the includes, startswith , ends with functions of a string?
const greet = "Hello, I am computer science student from Virtual Uni of pakistan."
console.log(greet.length);

console.log(greet.includes("Hello"));
console.log(greet.startsWith('Hello', 0));
console.log(greet.endsWith('pakistan', 65));


//upper case
console.log(greet.toUpperCase());

const string = "Please give me RS.10000"
const amount = string.split("RS.")[1];
console.log(amount);


//4th character removed

let new_string = string.substring(0, 4) + 'Z' + string.substring(4);
console.log(new_string);
