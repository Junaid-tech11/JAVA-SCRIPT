class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher('chai','chai@example', '1234')
chai.addCourse()
const chai2 = new User('LemonChai')
chai2.logMe()
console.log(chai instanceof User);
