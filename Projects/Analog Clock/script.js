let hr = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function displayTime(){
    let date = new Date();

    //it give us date/time sec hour min
    let hh = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();
    
    let HrRotation = 30*hh + mn/2;
    let minRotation = 6*mn;
    let secRotation = 6*sc;

    hr.style.transform =`rotate(${HrRotation}deg)`;
    min.style.transform =`rotate(${minRotation}deg)`;
    sec.style.transform =`rotate(${secRotation}deg)`;
    
    

}
setInterval(displayTime, 100);
