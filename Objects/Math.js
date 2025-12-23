//objects has many properties
const descriptor = Object.getOwnPropertyDescriptors(Math, "PI") //it tell us about hidden values of objects

//console.log(descriptor); //it tells us about hardcoded value of js it can't be changed by default

//console.log(Math.PI);  //it can't be override

const myNewObj = {
    name:'Ginger',
    price:'210',
    isAvailable:true,

    orderChai:function(){
        console.log('code blast');
        
    }
}

Object.defineProperty(myNewObj,'name',{
    //writable:false,
    enumerable:false,
})
console.log(Object.getOwnPropertyDescriptors(myNewObj,'name'));


//object is iterable here so it can be done by entries
for (let[key,value]  of Object.entries(myNewObj)) {

    if (typeof value !== 'function') {
            console.log(`${key}, ${value}`);
    }
    
}