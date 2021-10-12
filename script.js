// Save the element html

// varible for navbar element
const hamburgerMenu = document.getElementById('hamburger-id');
const navbarMenu = document.querySelector('.nav-menu');

// variable for modal popup
const modalOpenButton = document.getElementById('btn-open-modal')
const modalPopup = document.getElementById('this-modal');
const modalCloseButton = document.getElementById('btn-close-modal');

// for navbar
hamburgerMenu.addEventListener('click', mobileNavbar);

// for modals
// show modal
modalOpenButton.addEventListener('click', showModal);
// close modal
modalCloseButton.addEventListener('click', closeModal);

// function

// navbar function
function mobileNavbar() {
    hamburgerMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    console.log("hee");
}

function showModal(){
    modalPopup.style.display = 'flex';
    modalPopup.classList.add('show-animation');   
    setTimeout(() => {
        modalPopup.classList.remove('show-animation');   
    },300);
}

function closeModal(){
    modalPopup.classList.add('hide-animation');
    setTimeout(() => {
        modalPopup.style.display = 'none';   
    },100);
    setTimeout(() => {
        modalPopup.classList.remove('hide-animation');   
    },300);

}

//

