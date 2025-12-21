// 1. Select Elements
// Note: We use querySelector because your HTML uses class="model-overlay", not id
const modal = document.querySelector('.model-overlay');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('cls-btn');

// 2. Open Modal Function
openBtn.addEventListener('click', function() {
    modal.classList.remove('hidden');
});

// 3. Close Modal Function
closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
});

// 4. Close when clicking outside the content area
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});