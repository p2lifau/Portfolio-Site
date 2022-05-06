// Hamburger Menu selectors
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Select open modal elements
const modalBtn1 = document.querySelector('.button-1');
const modalBtn2 = document.querySelector('.button-2');
const modalBtn3 = document.querySelector('.button-3');
// select modal background
const modalBg = document.querySelector('.modal-bg');
// select close modal button
const modalClose = document.querySelector('.modal-close');

// Event Listeners for modal buttons
modalBtn1.addEventListener('click', () => {
  modalBg.classList.add('bckg-active');
})
modalBtn2.addEventListener('click', () => {
  modalBg.classList.add('bckg-active');
})
modalBtn3.addEventListener('click', () => {
  modalBg.classList.add('bckg-active');
})

modalClose.addEventListener('click', () => {
  modalBg.classList.remove('bckg-active');
})



