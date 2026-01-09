// # Determining Even / Odd Numbers
// # Difficulty: Easy
// # Topics: Basic Programming
// # Description: Write a program to check whether a number is even or odd.
// # Example:
// # Input: number = 4
// # Output: Even
// # Explanation: Since 4 is divisible by 2, it is an even number.


function evenOdd(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(evenOdd(3))

// Description: Write a program that takes three different numbers and determines which one is the largest.



function findMax(a, b, c) {
    if (a > b && a > c) {
        return (`The Highest Number is ${a}`);

    } else if (b > c) {
        return (`The Highest Number is ${b}`);
    } else {
        return (`The Highest Number is ${c}`);
    }
}
console.log(findMax(14, 445, 12))


//Description: Write a function that calculates the factorial of a number. In math,
// the factorial of 5 (written as 5!) is: 5 * 4 * 3 * 2 * 1 = 120

function calculateFactorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i

    }
    return result
}
console.log(calculateFactorial(5));
