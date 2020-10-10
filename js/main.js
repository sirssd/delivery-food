const CARD_BUTTON = document.querySelector('#card-button');
const MODAL = document.querySelector('.modal');
const MODAL_CLOSE = document.querySelector('.close');

CARD_BUTTON.addEventListener('click', toggleModal);
MODAL_CLOSE.addEventListener('click', toggleModal);

function toggleModal() {
    MODAL.classList.toggle('is-open');
}

new WOW().init();