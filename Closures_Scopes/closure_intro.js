// document.getElementById('green').onclick = function()
// {
//     document.body.style.backgroundColor = 'green'
// }
// document.getElementById('red').onclick = function()
// {
//     document.body.style.backgroundColor = 'red'
// }

// alternate method

function clickHandler(color){
    //document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler('orange')

document.getElementById('yellow').onclick = clickHandler('yellow')