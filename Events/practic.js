document.querySelector('#images').addEventListener('click',
    function(e){
        console.log(e.target.parentNode);//it identify the where it comes
        console.log(e.target.tagName); //it is event method to identify tag name 
        
        if (e.target.tagName ==="IMG") {
            console.log(e.target.id);
            
            let removeIt = e.target.parentNode
            removeIt.remove() //to remove 
            //removeIt.parentNode.removeChild(removeIt) //alternate method
        }

},false)