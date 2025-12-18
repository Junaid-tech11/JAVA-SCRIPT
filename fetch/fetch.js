
fetch('https://jsonplaceholder.typicode.com/users')
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})
//here is some imp point to note fetch will output first in compare to any other 
//objects like setTimeout() etc because it wil return as promise
//  and promise have higher priority order