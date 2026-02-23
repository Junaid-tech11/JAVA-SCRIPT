//good method: is 
const arrayOfNumbers = [];
for (let value = 10; value <= 50; value += 10) {
    arrayOfNumbers.push(value)
}
console.log(arrayOfNumbers);


//bad method :iterating through value
for (let index = 0; index <= arrayOfNumbers.length; index++) {
    console.log(arrayOfNumbers[index]);

}