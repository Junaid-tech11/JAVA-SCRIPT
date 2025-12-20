function SetUsername(username){
    //complex DB
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //call helps us to explicit call the other function and hold the reference

    this.email = email
    this.password = password
}

const ali = new createUser("Chai",'chai@fb',"213213")

console.log(ali);
