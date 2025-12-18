//1.SetTimeout():it is function it is the part of the browser and it is web Api

const sayName = function name() {  
    console.log("Hello");
}
setTimeout(sayName ,2000) //it waits for the given time and then execute and it is contrast to setInterval()

const changeText = function(){
    document.querySelector('h1').innerHTML
= 'Best JS Functions'
}
const changeMe = setTimeout(changeText, 2000) 

//we have to  stop the timeout so we have to use clearTimeout()
//clearTimeout(changeMe)


//now add Eventlistner to stop the setTimeout()
document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeMe)  
    console.log("Stopped");
    
})