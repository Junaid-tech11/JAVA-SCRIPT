function User(name,email){
    this._name = name;
    this._email = email;

    //to set the set and get in function:
    Object.defineProperty(this, 'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        },
    })
}   


const chai = new User('LemonTea',
    'chai@.com'
)
console.log(chai.email);
