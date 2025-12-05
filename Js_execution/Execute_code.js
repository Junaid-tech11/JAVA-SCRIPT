//******************JS Code Execution Context******************/
//js has 3 Context
//Global Context
//Function Context
//Eval Context

//Global Context
var a = 10;
console.log("Global Context: ", a); //10

//Function Context
function myFunction() {
    var b = 20;
    console.log("Function Context: ", b); //20
}

myFunction();
//Eval Context
var code = "var c = 30; console.log('Eval Context: ', c);";
eval(code); //30

//Note: Eval context is generally discouraged due to security and performance reasons.
//It's better to avoid using eval in production code.


//*************************Code Execution****************** */
//now how to js execute the code

//1. Creation Phase / Memory Allocation Phase
//In this phase, memory is allocated for variables and functions.
//Variables are initialized with undefined, and functions are stored in memory.

//2. Execution Phase
//In Creation Phase, memory is allocated for variables and functions.
//In Execution Phase, the code is executed line by line.


//Example to illustrate Creation and Execution Phase
let x = 5; //Creation Phase: memory allocated for x
let y = 10; //Creation Phase: memory allocated for y

function add(x, y) { //Creation Phase: memory allocated for add function
    return x + y; //Execution Phase: code executed line by line
}   
console.log("Result of add function: ", add(x, y));
//Output: Result of add function: 15
//In this example, during the Creation Phase, memory is allocated for variables x, y, and the add function.
//During the Execution Phase, the add function is called, and the code inside it is executed line by line.
//This is how JavaScript executes code in different contexts and phases.
//whenever function is invoked a new execution context is created for that function call. with new set of variable and function memory allocation.
//Each execution context has its own Creation and Execution Phase.
//This is how JavaScript manages code execution in different contexts and phases.
//******************End of JS Code Execution Context******************/

//******************JavaScript Call Stack******************/
//Call Stack is a data structure that keeps track of function calls in a program.
//It follows the Last In First Out (LIFO) principle.
function firstFunction() {
    console.log("Inside First Function");
    secondFunction();
    console.log("Exiting First Function");
}
function secondFunction() {
    console.log("Inside Second Function");
    thirdFunction();
    console.log("Exiting Second Function");
}
function thirdFunction() {
    console.log("Inside Third Function");
    console.log("Exiting Third Function");
}
firstFunction();
//Output:
//Inside First Function
//Inside Second Function
//Inside Third Function
//Exiting Third Function
//Exiting Second Function
//Exiting First Function
//In this example, when firstFunction is called, it is added to the call stack.
//Then, secondFunction is called from within firstFunction, so it is added to the call stack on top of firstFunction.
//Next, thirdFunction is called from within secondFunction, so it is added to the call stack on top of secondFunction.  
//When thirdFunction completes, it is removed from the call stack, and control returns to secondFunction.
//When secondFunction completes, it is removed from the call stack, and control returns to firstFunction.
//Finally, when firstFunction completes, it is removed from the call stack.
//This is how the call stack manages function calls and returns in JavaScript.
//******************End of JavaScript Call Stack******************/

//******************JavaScript Event Loop******************/
//Event Loop is a mechanism that allows JavaScript to perform non-blocking operations.
//It enables asynchronous programming by allowing the execution of code to continue while waiting for other operations to complete.
console.log("Start");
setTimeout(function() {
    console.log("Inside setTimeout");
}   , 0);
console.log("End");
//Output:
//Start
//End
//Inside setTimeout
//In this example, the setTimeout function is used to schedule a callback function to be executed after a delay of 0 milliseconds.
//However, the callback function is not executed immediately.
//Instead, it is added to the task queue, and the event loop checks the call stack.
//Since the call stack is empty after logging "End", the event loop takes the callback function from the task queue and adds it to the call stack for execution.
//This is how the event loop allows JavaScript to perform non-blocking operations and handle asynchronous code execution.
//******************End of JavaScript Event Loop******************/

