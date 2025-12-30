const emailInput = document.getElementById('email-type')
const emailError = document.getElementById('email-error')

emailInput.addEventListener('input', function (){
    const text = emailInput.value;
    if(text.includes('@')){
        emailError.innerText = ""
    }else{
        emailError.innerText = "Email must include @";
        emailError.style.color = 'red';
    }
})

const pass1 = document.getElementById('pass-one');
const pass2 = document.getElementById('confirm-pass');
const btn = document.getElementById('login');

function checkPassword(){
    const val1 = pass1.value;
    const val2 = pass2.value;
    if (val1 == val2 && val1 !== "") {
        btn.disabled = false
    }else{
        btn.disabled = true
    }
}
pass1.addEventListener('input', checkPassword);
pass2.addEventListener('input', checkPassword);
