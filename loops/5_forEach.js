//for Each loop 
const numbers = [1, 2, 3, 4, 5];

// numbers.forEach( function (value) {     //here we can skip the name of function
//     console.log(value);
    
// })  

// numbers.forEach( (items) => {
//     console.log(items);
    
// })
// //it does't matter which function are you using

// function printMe(item){
//     console.log(item);
    
// }
// numbers.forEach(printMe)

//other way to pass parameters
numbers.forEach((value, index, arr)=>{
    //console.log(value, index, arr);
    
})

const myCoding = [
    {
        languageName:"Javascript",
        languageExtension:"JS"

    },
    {
        languageName:"C++",
        languageExtension:"CPP"

    },
    {
        languageName:"Python++",
        languageExtension:"Py"

    },
]
myCoding.forEach((item) =>{
    console.log(item.languageName);
    

})