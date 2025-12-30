const toggleBtn = document.getElementById('toggle-btn')
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark'){
    body.classList.add('dark-mode')
    toggleBtn.innerText = 'Light Mode'
}

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme','dark');
        toggleBtn.innerText = 'Light Mode'
    }else{
        localStorage.setItem('theme','light')
        toggleBtn.innerText = 'Dark Mode'
    }
});
