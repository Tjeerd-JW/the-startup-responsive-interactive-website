const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal button')
const openButtons = document.querySelectorAll('.modal-button')
const mailButton = document.querySelector('.forecast button')

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
    modal.classList.add('modal-not-show')
}
modal.addEventListener("animationend", () => {
    modal.classList.remove('modal-not-show')
})

mailButton.addEventListener("click", mailHandler)

function mailHandler() {
    mailButton.classList.add('mail-submit')
}

mailButton.addEventListener("animationend", () =>{
    mailButton.classList.remove('mail-submit')
})