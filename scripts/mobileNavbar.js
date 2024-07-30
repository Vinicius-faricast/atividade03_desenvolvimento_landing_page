
const handleClick = (mobileMenu, navItens, navLinks) => {
    navItens.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    navLinks.forEach(link => {
        link.style.animation = `navLinkFade 0.5s ease fowards 0.3s`
    });

}

export const createMobileMenu = () => {

    const mobileMenu = document.querySelector('.mobile-menu');
    const navItens = document.querySelector('.nav-itens');
    const navLinks = document.querySelectorAll('.nav-itens li')
    
    mobileMenu.addEventListener('click',() => handleClick(mobileMenu, navItens, navLinks));
};