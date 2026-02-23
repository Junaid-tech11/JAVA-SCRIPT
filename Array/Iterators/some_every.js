const numbers = [12, -23, -32, 23, 21]

console.log(numbers.includes(10));

//some is return  true for one of the item
console.log(numbers.some((num) => num > 0));

//it returns true for everything
console.log(numbers.every((num) => num > 0));
