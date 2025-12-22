class User{
    constructor(name){
        this.name = name;
    }
    logIn(){
        console.log(`Username: ${this.name}`);
        
    }
    static createId(){  //it don't allow any object to call this
        return `1234`
    }

}
const junaid = new User('junaid')
//console.log(junaid.createId());

class Teacher extends User{
    constructor(name,email){
        super(name)
        this.email = email;
    }
}

const Mobile = new Teacher('iphone','phone@.com')
console.log(Mobile.createId());