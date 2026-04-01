// today topic is   1-4-2026
// data types in javascript
// primitive
// strings, number, boolean, undefined, null, undefined
// non - primitive
// object, array, function, Date, Math

//1. strings: a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). they are used to represent text and can include letters, numbers, symbols, and whitespace. strings are immutable, meaning that once created, they cannot be changed. however, you can perform various operations on strings, such as concatenation, slicing, and searching for substrings.
//Strings:

let firstName = 'Junaid ';
let middleName = 'Jabbar';
let lastName = 'Abbasi';

console.log(middleName.includes('J'));
console.log(middleName.toUpperCase());
console.log(middleName.toLowerCase());
console.log(middleName.length);
console.log(middleName[0]);

//2. numbers: in javascript, numbers can be integers or floating-point values. they are used to represent numeric data and can be manipulated using various arithmetic operators such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). numbers in javascript are based on the IEEE 754 standard for double-precision floating-point arithmetic, which means they can represent a wide range of values but may have limitations in precision for very large or very small numbers.
// numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);



//3. boolean: a data type that can have one of two values: true or false. it is used to represent logical values and is often used in conditional statements and control flow to determine the flow of execution based on certain conditions. boolean values can be the result of comparisons, logical operations, or can be assigned directly to variables.
// boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);


//it is block scope variable
if (isTrue) {
    console.log('This is true');
}
if (isFalse) {
    console.log('This is false');
}


//4. undefined and null: both undefined and null are used to represent the absence of a value, but they have different meanings and use cases in javascript.
// undefined:absence of value 
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined    why undefined is a data type in javascript and it is used to indicate that a variable has not been assigned a value. when you declare a variable but do not assign any value to it, it is automatically assigned the value of undefined. this means that the
//  variable exists but does not have any meaningful value yet.    


// null: is a special value that represents the intentional 
// absence of any object value. it is often used to indicate
//  that a variable should have no value or that an object 
// reference is intentionally empty. when you assign null to a
//  variable, it means that the variable is explicitly set to 
// have no value. this can be useful in situations where you 
// want to indicate that a variable is intentionally empty
//  or that an object reference is not currently pointing to any object.
let nullVariable = null;
console.log(nullVariable); // Output: null 


//5. equality operator: in javascript, there are two types of equality operators: the loose equality operator (==) and the strict equality operator (===). these operators are used to compare values for equality, but they behave differently when it comes to type coercion.
//equlaity operator
let a = 10;
let b = '10';
console.log(a == b); // Output: true (loose equality, type coercion occurs)
console.log(a === b); // Output: false (strict equality, no type coercion)
// in the first case, the loose equality operator (==) performs type coercion and considers the number 10 and the string '10' to be equal, resulting in true.
// in the second case, the strict equality operator (===) does not perform type coercion and considers the number 10 and the string '10' to be different types, resulting in false.




//type coercion is the automatic conversion of values from
// one data type to another in order to perform operations
//  or comparisons. it can lead to unexpected results if not
//  understood properly, especially when using the loose equality operator
//  (==) which allows for type coercion. it is generally recommended to use
// the strict equality operator (===) to avoid unintended consequences of type coercion and ensure
// that both the value and type are compared accurately.


//6. non-primitive data types: in javascript, non-primitive data types include objects, arrays, functions, Date, and Math. these data types are more complex than primitive data types and can store multiple values or have properties and methods associated with them. objects are collections of key-value pairs, arrays are ordered lists of values, functions are reusable blocks of code that perform specific tasks, Date is used to work with dates and times, and Math provides mathematical constants and functions for performing mathematical operations. non-primitive data types are mutable, meaning that their values can be changed after they are created.
// non-primitive data types
// objects
let person = {
    name: 'Junaid',
    age: 30,
    city: 'Karachi'
};
console.log(person.name);

// arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1

// functions
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('Junaid')); // Output: Hello, Junaid!

// Date
let currentDate = new Date();
console.log(currentDate);

// Math
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.sqrt(16)); // Output: 4





