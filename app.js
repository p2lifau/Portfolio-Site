// Hamburger Menu selectors
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Select modal Button elements
const modalBtn1 = document.querySelector('.button-1');
const modalBtn2 = document.querySelector('.button-2');
const modalBtn3 = document.querySelector('.button-3');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

// Event Listeners for modal buttons
modalBtn1.addEventListener('click', () => {
  modalBg.classList.add('bg-active');
})
modalBtn2.addEventListener('click', () => {
  modalBg.classList.add('bg-active');
})
modalBtn3.addEventListener('click', () => {
  modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', () => {
  modalBg.classList.remove('bg-active');
})

