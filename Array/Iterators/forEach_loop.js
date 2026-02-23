const numbers = [23, 21, 1, 2, 43, 4]


//for Each:we can't use Break inside this loop:
// it is incompatible with async and await


numbers.forEach((value, index) => {
    console.log(value);
    console.log(index)
})