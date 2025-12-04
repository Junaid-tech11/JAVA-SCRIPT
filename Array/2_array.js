const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)


//console.log((marvel_heros)); //array wil be present in array [, [, ]] and takes as at index 3
//console.log(marvel_heros[3][2]); // its output would be batman we are calling array from array

//concat operator
const allheros  = marvel_heros.concat(dc_heros)
console.log(allheros);  //its output would combine both array and return new array

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] //this concept is spread its same behave likes concat()
console.log(all_new_heros);

//flat wil concate all values if we have [[[[[]]]]] it will merge all this and resultant in single array
const another_array = [1,2,3,[4,5,6,7],8 ,[55,66,77,88,99], [12,14,54,65]]
let real_another_array = another_array.flat(Infinity)
console.log((real_another_array));


console.log(Array.isArray("Junaid")) //output will be false we are checking does it is array

console.log(Array.from("Junaid")); // this will make this string into array 

console.log(Array.from({name:"Junaid"}));  // it will give empty array if we dont mentioned which to make array key or value

let score = 1200
let score2 = 100
let score3 = 12300
console.log(Array.of(score,score2,score3)); //it returns a new array from a set of elements(var, array etc).


