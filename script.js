const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal button')
const openButtons = document.querySelectorAll('.modal-button')

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('open')
        modal.classList.add('modal-show')
    });
});

closeButton.addEventListener("click", closeModal)

function closeModal() {
    console.log('sluiten')
    modal.classList.remove('modal-show')
}