// Save the element html
const hamburgerMenu = document.getElementById('hamburger-id');
const navbarMenu = document.querySelector('.nav-menu');

console.log(navbarMenu);
console.log(hamburgerMenu);

hamburgerMenu.addEventListener('click', mobileNavbar);

// function
// navbar function
function mobileNavbar(){
    hamburgerMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    console.log("hee");
}

