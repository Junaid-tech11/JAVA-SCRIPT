function one () {
    const username = 'ALi'

    function two() {
        const website = 'Youtube'
        //console.log(username);
        
    }
    // console.log(website);   
    
    two()
}

one()

if (true){
    const username = "Umer"
    if (username === "Umer") {
        const website = ' Facebook'
        //console.log(username + website);
        }
        //console.log(website);
        
}
//console.log(username); //it will give us error we are accessing outside the scope


//*********************************** */
addone(5)  // it can also declared before the function

function addone (num) {
    return num +1      //this is called function
}

//addone


addTwo(3)   //here it gives us error we can't declare here because of variable 
const addTwo = function (num) {
    return num +2           //this is called expressions
}

//addTwo(3)
