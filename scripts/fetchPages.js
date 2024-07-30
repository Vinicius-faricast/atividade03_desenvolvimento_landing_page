import { createFooter } from "./footerModule.js";
import { createMobileMenu } from "./mobileNavbar.js";
import { createNavBar } from "./navBarModule.js";

const root = document.querySelector('#root');

const validateHash = (hash) => hash === ""  ? 'home' : hash.replace('#', '');

const renderPages = () => {
    let hash = window.location.hash;

    if(window.location.hash ==='#about-us'){
        hash = '';
    };

    hash = validateHash(hash);

    root.innerHTML = '';

    const url = `./${hash}.html`;

    fetchPages(url);
};

const init = () => window.addEventListener('hashchange', renderPages)

export const insertPages = () => {
    window.addEventListener('load', () => {
        createNavBar();
        createMobileMenu();
        createFooter();
        renderPages();
        init()
    });
};

export const fetchPages = async (url) => {
    try {
        const response = await fetch(url);
        const htmlInText = await response.text();
        root.innerHTML = htmlInText;
    } catch (error) {
        throw new Error(`Erro ao carregar o arquivo: ${error}`);
    };

};
