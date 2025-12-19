//prototype behave of JS: JS did not until it does not what achieved what we want
//  he contacts with his parents, upto grandparents until it not achieved 
//it works with inheritance , this(keyword), 
//Everything in js is object array ,string ,null,function(can work in both way objects,function)

function mutltipleBy5(num){
    return num*5
}
mutltipleBy5.power = 2
console.log(mutltipleBy5(5)); //output: 25
console.log(mutltipleBy5.power);  //Output: 2
console.log(mutltipleBy5.prototype);  //output: {}


function createUser(username, score){
    this.username = username  //this shows current context
    this.score = score

}

createUser.prototype.increment = function () {
    this.score++ 
}

createUser.prototype.printMe =function(){
    console.log(`Price is ${this.score}`);
    
}

const Ali =  createUser('ALi', 50)
const tea = new createUser('tea', 80)  


tea.printMe()