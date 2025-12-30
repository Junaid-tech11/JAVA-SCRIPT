const title = document.getElementById('title');
const nameFeild = document.getElementById('namefield');
const signinbtn = document.getElementById('signinbtn');
const signupbtn = document.getElementById('signupbtn');

signupbtn.onclick = function(){
    title.innerHTML = 'Sign Up';
    nameFeild.style.display = 'block';
}
signinbtn.onclick = function(){
    title.innerHTML = 'Login ';
    nameFeild.style.display = 'none';
}