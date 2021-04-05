const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Make a closemodal function to prevent repeating code
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

console.log(btnsOpenModal);

// loop through each button and add event listeners to all of them
for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// add click event listener to hide modal and overlay blur when closing modal
// if we call the function right away, it wont work as intended, it will be executed
// as soon as the JS is loaded, we want it to call the function only when clicked!
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});