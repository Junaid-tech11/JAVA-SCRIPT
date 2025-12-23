//by default there is getter and setter function is always
//  present it can also be update by overriding
class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase() //_email represent private value
    }
    set email(value){
        this._email = value
    }
    //get and set always write parallel
    get password(){
        //return this._password.toUpperCase()
        return `${this._password}^*&^`  //to set the default value and save it from other 
    }
    //to set the value
    set password(value){
        this._password =value  //it give us error so to solve this: _this.
    }
}

const junaid = new User('junaid@.com','afd')
console.log(junaid.password);
console.log(junaid.email);
