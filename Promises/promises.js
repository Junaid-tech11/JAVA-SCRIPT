//There are many ways to declare Promise:
// 1.
const promise_1 = new Promise(function(resolve,reject){   //Promise has two parts:it can be create and also can be consume
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()  //it call to consume the promise
    },1000)
})

//now to consume this promise
promise_1.then(function(){   //then() is connected with resolve
    console.log('Promise is  consumed');
    
})        


// 2.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
        
    },1000)
}).then(function(){
    console.log('Async 2 Resolved');
    
})

// 3.
const promise_3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({      //resolve can also take data
            username:'Web', 
            email:'Web@.com'
        }) 
    },1000)
})
promise_3.then(function(user){
    console.log(user);  //to print the data from resolve
    
})

// 4.
const promise_4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:'Umer',password:'123'})
        }else{
            reject('Error:Something Wrong!')
        }
    },2000)
})

promise_4
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{      //chaining
    console.log(username);
    
})
.catch(function(err){
    console.log(err);
    
}).finally(()=>console.log('The promise is either resolved or rejected'))


// 5.
const promise_5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username:'Javascript',password:'123'})
        }else{
            reject('Error:js went Wrong!')
        }
    },2000)
});

async function consumePromise_5(params) {
    try{
        const response = await promise_5
    console.log(response);
    } catch(error){
        console.log(error);
        
    }
    
}
consumePromise_5()

//6. now to check whats going on behind the scene of all this 
// async function getallUser(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')   //it is an object 
//     const data = response.json()  //convert to json from string
//     console.log(data);
//     } catch(err){
//         console.log("E:", err);
        
//     }
    
// }
//getallUser()


//Alternate method to write step 6 through .then() or fetch()
fetch('https://api.github.com/users/hiteshchoudary')
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})



