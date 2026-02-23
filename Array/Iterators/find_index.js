const names = ["ALi", 'Bob', 'Tiff', 'Junaid'];

console.log(names.indexOf("ALi"));
console.log(names.indexOf("Bob", 1));
// -1 in case of wrong value
console.log(names.indexOf("Tiff"));
//Last value of array
console.log(names.lastIndexOf("Junaid"));


console.log(names.findIndex((name) => name === "Junaid"));

console.log(names.find((value) => value === "ALi"));


const people = [{ name: 'John' }, { name: 'June' }]
const person = people.find(p => p.name === "June");
//change the person with new name 
person;
person.name = "Salt";
person;
people;
