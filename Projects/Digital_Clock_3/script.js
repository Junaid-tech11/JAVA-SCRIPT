const clock = document.getElementById('clock')
//document.querySelector('#clock')  both are correct way

//now we have to run again * again this time method so we have to use method:
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString()); //method to print time
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);