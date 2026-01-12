const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal button')
const showModal = document.querySelector('.activities')

closeButton.addEventListener("click", closeModal)
showModal.addEventListener("click", openModal)

function closeModal() {
    console.log('sluiten')
    modal.classList.remove('modal-show')
}
function openModal() {
    console.log('open')
    modal.classList.add('modal-show')

}
