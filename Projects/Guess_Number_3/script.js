

let randomNUmber = (parseInt( Math.random()*100+1));  //to generate random number

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
        
    });
}
function validateGuess(guess){
    //to check the validation and requirements 
    if(isNaN(guess)){
        alert("Please enter a valid Number")
    } else if (guess < 1){
        alert("Please enter a number more than 1")
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNUmber}`)
            endGame();
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //to print the message for validateGuess 
    if(guess===randomNUmber){
        displayMessage(`You Win!`)
        endGame()
    }else if(guess < randomNUmber) {
        displayMessage(`Number is Too Low`)
    }
    else if(guess > randomNUmber) {
        displayMessage(`Number is Too high`)
    }
}

function displayGuess(guess){
    //it clean the values and also update the array
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess ++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(msg){
    //to work with dom
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNUmber = parseInt( Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
