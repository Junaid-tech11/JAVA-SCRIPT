//setInterval():its syntax is same as setTimeout() but its working is different
//it works on interval if we set 2 sec it wil again  print after every 2 second
const setDate = function (str) {
    console.log(str, Date.now());
    }
    let intervalId;


    
//clearInterval(intervalId)
//now goal is to when we press the start it shows that when we stop it should stop
    document.querySelector('#start').addEventListener('click', function(){
        intervalId = setInterval(setDate, 1000, "Hello")
    })

//now we have to stop this using clearInterval()
    document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(intervalId)
    })






// //Ans 1 
//     const sayDate = function(str)
//     {
//         console.log(str,Date.now())
//     }

//     let intervalId;

//     document.getElementById("start").addEventListener("click",function(e)
//     {
//         intervalId = setInterval(sayDate,1000,"hi");
//     },false);

//     document.getElementById("end").addEventListener("click",function(e)
//     {
//         console.log("Stopped");
//         clearInterval(intervalId);
        
//     },false);


//     //ans 2
    

// const sayDate = function(str){
//         console.log(str, Date.now());
//     }
//     document.querySelector('#start').addEventListener('click',function(e){
//         const intervalId = setInterval(sayDate, 1000, "hi")
//         document.querySelector('#stop').addEventListener('click',function(f){
//         clearInterval(intervalId)
//     })
//     })