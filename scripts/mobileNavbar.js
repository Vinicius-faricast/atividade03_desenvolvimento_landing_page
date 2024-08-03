
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
    const navLinks = document.querySelectorAll('.nav-itens li');
    const menuBrand = document.querySelector('.logo');
    
    mobileMenu.addEventListener('click',() => handleClick(mobileMenu, navItens, navLinks));

    navLinks.forEach(link => {
        link.addEventListener('click', () => handleClick(mobileMenu, navItens, navLinks));
    });

    menuBrand.addEventListener('click', () => {
        navItens.classList.remove('active');
        mobileMenu.classList.remove('active');
    })
};