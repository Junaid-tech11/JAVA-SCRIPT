const mybtn = document.getElementById('trigger');
const mystage = document.getElementById('stage');

async function fetchAndDisplay(){
    const config = {
        headers:{
            'Accept':'application/json'
        },
    };
    try {
        const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    mystage.innerText = data.joke;

} catch (error){
    console.log('Something went Wrong:', error);
    
}
}


mybtn.addEventListener('click', fetchAndDisplay)