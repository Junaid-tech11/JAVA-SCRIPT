let myName = "Junaid    "
console.log(myName.trueLength); //now or goal is to make method of trueLength()


let myHeros = ['thor','spiderman'] 

let heroPower = {
    thor:'Hammer',
    spiderman:'sling',

    getSpiderPower:function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.junaid = function(){
    console.log(`Junaid is present in all objects`);
    
}
Array.prototype.arrJunaid = function(){
    console.log(`Hello from Junaid`);
    
}

// heroPower.junaid()
myHeros.junaid()
myHeros.arrJunaid()  //we give power to array
//heroPower.arrJunaid()


//Inheritance 

const User = {
    name:'Junaid',
    email:'example@.com'

}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:"JS assignment",
    fulTime:true,
    __proto__:TeachingSupport  
}

Teacher.__proto__ = User  //it is old syntax

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ABBASI                "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
    
}

anotherUserName.trueLength()
'Junaid'.trueLength()
'Tea'.trueLength()


// //This --> keyword is used to fetch the current context of the object, and the
//  new --> keyword is used to call the constructor function and create the context. (It actually tells the variable 
// that a method is present in the prototype, which is to be called.)
// prototype --> container containing the properties and methods that are common or shareable for a specific object.