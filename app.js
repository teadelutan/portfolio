const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const Links = document.querySelectorAll('.links li');
 // toggle nav
    burger.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
    });
 //animate links
    Links.forEach((link, index) => {
        link.style.animation = `navLinkFade 0s ease forwards ${index / 7 + 0}s`;
    });
}

navSlide();