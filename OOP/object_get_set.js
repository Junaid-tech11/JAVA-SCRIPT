const User = {
    _email:'email.com',
    _name:'Junaid',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

//it is the factory function for objects instead of new Keyword
const tea = Object.create(User)
console.log(tea.email);
