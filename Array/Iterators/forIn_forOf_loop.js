const numbers = [12, 32, 34, 12, 43, 23]


for (const index in numbers) {
    console.log(index)
    //for value we have to deReference  this
    console.log(numbers[index])
}


//for of loop:to print the value so its best for the value to minimum error




for (const value of numbers) {
    if (value > 2) {
        break;
    }
    console.log(value)
}