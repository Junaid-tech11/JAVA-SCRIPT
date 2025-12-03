const accountId = 134324 //cant be re-declare and re-assign
let accountEmail = "Example.com"//can be re-declare but not be re-assign
var accountPassword = "1423" // it can be re-declare and re-assign both

accountEmail = "wow.com"
accountPassword = "234123"
let accountState;
console.table([accountEmail, accountId, accountPassword, accountState])

