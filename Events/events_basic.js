// //Events runs sequentially
// //it works on some activity like mouse scroll or click or etc
// //attachedEvent() is also used 
// //jQuery - onEvent()
// //there are many type of events:
// // type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget,
// //clientX, clientY, screenX, screenY
// //altKey, ctrlkey, shiftkey,keyCode, it is all the parts of the 


// // document.getElementById('owl').onclick = function(){  //this approach is also not valid so,
// //     alert('owl clicked')
// // }

// //other best method to implement events:addEventListener()it can take at a time many events iin this
// //syntax we have 3 argument that is false we have own choice to right or not 
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
    
// }, false)  //false is default :if we put true it is called
// //  event propogation in case of false it is called event bubbling:it is define as from lower tag to towards higher tag
// //in case of true it is called event capturing

// document.getElementById('images').addEventListener('click',function(e){
//     console.log('Clicked inside the Ul');
    
// },true ) //it is capturing and it moves from top to bottom

// // in this we are directly accessing owl inside images
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(' Owl Clicked');
//     e.stopPropagation() //it stops the bubbling it don't allows to moves outwards
    
// }, false) //it is bubbling it moves from inside towards outwards

// document.getElementById('google').addEventListener
// ("click", function(e){

//     e.preventDefault(); //it help us to avoid open website 
//     e.stopPropagation()  //it stop bubbling
//     console.log(' google clicked');
// },false)







