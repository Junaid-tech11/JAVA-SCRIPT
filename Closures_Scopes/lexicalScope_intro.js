function init(){
    let name = "JavaScript";
    function displayName(){
        console.log(name);
        
    }
    displayName();
}
init();



function outer(){
    let userName = 'Junaid';
    console.log(secret);  //it can't be access by inner
    
    function inner(){
        let secret = 'my322'
        console.log('inner',userName);
        
    }
    function inner2(){
        console.log('inner2',userName);
        console.log(secret);  //it can't be access by his inner brother
    }
    inner();
    inner2();

}
outer();
//console.log("Too Outer", userName); //here we have error because of lexical scope 