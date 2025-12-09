//For loops:
//it is also called iterations.
//for (let i = 0; i < 5; i++) {
//    console.log(i);
//}
for (let i = 0; i <= 10; i++) {
    const element = i;        //it can't be used outside the loop scope.
    if (element  == 5) {
        //console.log("5 is best number");
        
    }
    //console.log(element);
}

// for (let i = 1; i <10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j < 10; j++) {
//         //console.log(`Inner loop value: ${j} and inner loop of outer loop value: ${i}`);
//         console.log(i + "*" + j + " = " + (i*j));
        
//     }

// }
let myArray = [12, 23, 34, 45, 56, 67, 78, 89, 90];
for (let index = 0; index < myArray.length; index++) {  //length is property of array which gives the size of array.
    const element = myArray[index];                     //accessing each element of array using index.
    //console.log(`Element at index ${index} is: ${element}`);  //index++ increments the index by 1 each time.
}

//there are many other keywords in loops like break, continue etc.
//break: it is used to exit from the loop.
//continue: it is used to skip the current iteration and move to the next iteration.
for (let i = 0; i < 10; i++) {  
    if (i == 5) {
        continue;  //skips the iteration when i is 5.
    }
    console.log(i);  //it will print all numbers from 0 to 9 except 5.

    if (i == 8) {
        break;  //exits the loop when i is 8.
    }   
    
}

