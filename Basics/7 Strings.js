// //string: it can denoted by both "", ''
// const name = 'Junaid'
// const git = 34
// console.log(name +" "+ git ); //its a old method

// //new method to conconate the string
// console.log(`Hello my name is ${name} and my git repo is ${git}`);

// //other way to declare string string is an object and its value are in key value pair from 0 
const gameName = new String('Junaid-Abbasi')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // its output would be  object{} its not empty

// //Methods 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('j')); 

// const newString = gameName.substring(2, 5) //  substring
// console.log(newString);

// const anotherString = gameName.slice(-4,0) //string slicing: it can take negative value
// console.log(anotherString);

// const newString1 ="   Umer   " 
// console.log(newString1);
// console.log(newString1.trim()); // to remove spaces


// const url = "https://example.com" 

// console.log(url.replace('.', '*')); // it is used to replace the value

// console.log(url.includes('example')); // to check value

// console.log(gameName.split('/'));


//******************practice problems************** */
// const messy = "             safdjKJLKJLJkjdfhkjdahsfl       "
// let cleanmessy = messy.trim();
// console.log(cleanmessy.toLocaleLowerCase());

// const emailExtractor = "student@university.edu"
// let position = emailExtractor.indexOf("@")
// console.log(emailExtractor.slice(position + 1 ));

// const python = "Python Is Great"
// console.log(python.toLowerCase().replaceAll(" ", "-"));

// const fullName = "Muhammad Ali"
// const nameList = fullName.split(' ');
// let fistName= nameList[0][0];
// let lastName= nameList[1][0];
// console.log(fistName + " " + lastName)


let user = " PassWord123 "
const clean = user.trim();
const lowerClean = clean.toLowerCase();
if (clean.length < 8){
    console.log(`Password is too short! Length is only ${clean.length}`);
};

if (lowerClean.includes("password")) {
    console.log("Error:You cannot use the word 'password!'");
    
}
let replaceword = clean.replace("Word", "***");
console.log("Final Result: " + replaceword);
