// //Classes are used in es6

// class User {
//     //its not necessary to write constructor
//     constructor (username,email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeName(){
//         return` ${this.username.toUpperCase()}`
//     }
// }
// const user1 = new User('Umer','umer@example.com', '121')
// console.log(user1.encryptPassword());
// console.log(user1.changeName());



//Now whats going behind the scene if we don't have class:
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}qwe`
}

User.prototype.changeName = function(){
    return `${this.username}`
}

const tea = new User("tea", "tea@.com", '123')

console.log(tea.encryptPassword());
console.log(tea.changeName());