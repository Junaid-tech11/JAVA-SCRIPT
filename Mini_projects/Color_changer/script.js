//Task:
//Make a rectangle and when we move mouse on that rectangle
//  on the left side we want to gradually change the color 
// of that rectangle to red and when we move mouse to the
//  right side we want to change the color to blue.

//steps to solve this :
//first check does mouse comes on box
// second check the location of mouse
// third now calculate the position from center to confirm the right or left
// fourth then confirm how much you are to which side the increase the intensity of red to left and blue to the right


const rect = document.querySelector('#center');
//step 1:
rect.addEventListener('mousemove', function(details){
    //console.log(rect.getBoundingClientRect());  //it tell us the location
    const rectanglelocation = rect.getBoundingClientRect();    
    const insiderectval = details.clientX - rectanglelocation.left;
    
    if(insiderectval < rectanglelocation.width/2){
        const redcolor = gsap.utils.mapRange(
            0,
            rectanglelocation.width/2,
            255,
            0, 
            insiderectval
        );
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor}, 0, 0 )`,
            ease:Power4,
        });
        
    } else{
        const bluecolor = gsap.utils.mapRange(
            rectanglelocation.width/2,
            rectanglelocation.width,
            0,
            255,
            insiderectval
        );
        gsap.to(rect,{
            backgroundColor:`rgb( 0, 0, ${bluecolor} )`,
            ease:Power4,
        });
        

        
    }
})

rect.addEventListener('mouseleave', function(){
    gsap.to(rect,{
        backgroundColor:'yellow',
    });
    
})