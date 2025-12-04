//destructuring  can be used to extract objects in array and objects.
const course = {
    coursename: "JavaScript",
    price: 1000,
    duration: "3 months",
    instructor: 'hitesh'   
}

// course.instructor  //it is done by normal way!

const {instructor: teacher} = course

console.log(teacher) // it is known as destructuring in Javascript

//How Api works or write or call through js
// {
//     name:'Junaid',         //it is json format and key and values 
//                                 //both are in string format
//     age:'class', 
//     city: "islamabad"  
// }   
// //API can also be collect in array,
// [
//     {},
//     {},
//     {},
// ]