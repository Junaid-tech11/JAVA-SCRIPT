//objects are not iterable in JavaScript
// to iterate over the properties of an object using for..of loop we can use Object.entries() method
const myObject = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    cpp: "C++"
}
//here for in loop is used to iterate over the keys of the object
for (const key in myObject) {
    //console.log(key, ":", myObject[key]);  
}

const myArray = ["JavaScript", "Python", "Ruby", "C++"];
//here for in loop is used to iterate over the values of the array
for (const key in myArray) {
    //console.log( myArray[key]);  //key is the index of the array
    
}

const map = new Map();
map.set("js", "JavaScript");
map.set("py", "Python");    
map.set("rb", "Ruby");
map.set("cpp", "C++");
//here for in loop is used to iterate over the keys of the map
for (const key in map) {
    console.log(key);       //there is no output as map is not iterable using for..in loop
}                           //for..in loop does not work with Map object

