//objects in JS
// in javascript, an object is a collection of key-value pairs, 
// where each key is a string (or symbol) and each value can be of any
//  data type. objects are used to store and organize data in a structured way. 
// they can represent real-world entities, such as a person, a car, or a book, 
// by encapsulating their properties and behaviors. objects can also have methods, 
// which are functions that operate on the object's properties. they are mutable, 
// meaning that their properties can be added, modified, or deleted after the object is created. 
// objects are fundamental to javascript programming and are widely used in various applications, including web development, server-side programming, and even in frameworks and libraries that provide additional functionality for working with objects.


// applications and frameworks.
// creating an object:
let person = {
    name: 'Junaid',
    age: 30,
    city: 'Karachi'
};


// accessing object properties
console.log(person.name); // Output: Junaid
console.log(person.age); // Output: 30
console.log(person.city); // Output: Karachi

// an associatve array (set of key-value pairs)
//mutable and passed by reference
// properties can be of any type 
// like functions, strings numbers, booleans, arrays, other objects etc.


// objects are compared on the basis of reference not value. 
// when we compare two objects using the equality operator (== or ===), 
// it checks whether they reference the same object in memory, 
// rather than comparing their properties and values. therefore,
//  even if two objects have the same properties and values, 
// they will be considered different if they are stored in 
// different memory locations. to compare the properties and values
//  of two objects, we need to use a custom comparison function that checks each property and value for equality.

let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };
console.log(obj1 == obj2);


// memory :stack and heap 
// stack all primitives value with their identifiers and reference to objects
// in heap non-primitive values are stored and accessed through reference in stack
// when we assign an object to a  identifier or variable, we are actually assigning a reference to that object in memory. if we assign the same object to another variable, both variables will point 
// to the same object in memory. therefore, if we modify the object through one variable, the changes will be reflected when we access the object through the other variable, since they both reference the same object in memory.
// objects are mutable in such a sense that we can change the values of properties inside  object.
//orphan values: value capture by garbage collector when there is no reference to it in stack.



/// there are 2 way to create objects in JS
// 1. object literal syntax: it is fast method
let person1 = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

// 2. constructor function:it is little bit slow method but working is same just creation phase of object is different  
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

//3. constructor method: it is also a way to create objects in JS but it is not commonly used as object literal syntax and constructor function. it is similar to constructor function but it uses the class syntax introduced in ES6. it provides a more concise and cleaner way to define constructor functions and create objects using the class keyword.:
const student = new Object();
student.name = 'Bob';
student.age = 20;
student.city = 'Los Angeles';

//js engine directly create object without any other process in literal method and we 
//can add properties on the time of declaration

//In case of constructor function, js engine first create create the new object()  constructor and then store it inside the variable/identifier
// And we can't add properties directly inside the object constructor function but we can add properties to the object after creating it using constructor function.


//descriptive identifiers/variables:
// always start with a letter, underscore (_), or dollar sign ($).
//never start with a number, spaces are not allowed in variable names, but you can use camelCase or underscores to separate words.
// example of valid variable names
let firstName = 'John';
let _age = 30;
let $city = 'New York';

// example of invalid variable names
// let 1stName = 'John'; // starts with a number
// let first name = 'John'; // contains a space
// let first-name = 'John'; // contains a hyphen



//Dot Notation syntax:
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
console.log(car.make); // Output: Toyota
console.log(car.model);

//Dot method in functions:
const person3 = {
    name: 'Alice',
    age: 25,
    greet: function () {
        console.log('Hello, ' + this.name + '!');
    }
};
person3.greet(); // Output: Hello, Alice!   

//Bracket Notation syntax:
const person2 = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
console.log(person2['name']);
