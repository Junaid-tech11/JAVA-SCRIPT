// while loop is used when the number of iterations is not known beforehand 
// and depends on a certain condition being true.
// In this example, we will print numbers from 0 to 4 using a while loop.
//. In the world of programming, we often refer to loops using two different control structures. The 'for' and 'while' loops are what we call 'entry control loops'
//  because they check the condition before entering the loop. 
// On the other hand, 'do-while' loops are known as 'exit control loops' since they ensure that the loop body is executed at least once 
// before checking the condition.
let count = 0;  
while (count <= 10) {
    //console.log("Count is: " + count);
    count = count + 2;
}

let myArray = [10, 20, 30, 40, 50];
let index = 0;
while (index < myArray.length) {
    //console.log("Array element at index " + index + " is: " + myArray[index]);
    index = index + 1;
}   

// do-while loop is used when we want to ensure that the loop body is executed at least once
// regardless of the condition being true or false.
// In this example, we will print a number at least once using a do-while loop.
let num = 1;
do {
    console.log(`Number is:  ${num  }`);
    num++;
} while (num <= 5);
// In this case, even though the condition (num < 5) is false from the start,
// the loop body is executed once before the condition is checked.  


let anotherNum = 1;
do {
    console.log("Another Number is: " + anotherNum);
    anotherNum++;
} while (anotherNum <= 3);
// Here, the loop will execute three times, printing values from 1 to 3.

// Summary:
// - Use 'while' loops when the number of iterations is not known beforehand and depends on a condition.
// - Use 'do-while' loops when you want to ensure that the loop body is executed at least once before checking the condition.   

// Now there is some specialized loops to access arrays and objects like for..in and for..of loops which we will cover later.