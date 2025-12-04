//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//it is used in many way to avoid global pollute so we make other scope to avoid this

(function info () {
    console.log(`DB CONNECTED 1`);
    
})();  // now to  immediately invoked function

//syntax: ()()

// to avoid global scope pollution we used (iife)



(function info2() {
    console.log("DB Connected 2");
})();


//it can also done by arrow => function
//anonymous IIFE
( (name)  => {
    console.log(`DB Connected 3 ${name}`);
})("DONE!")