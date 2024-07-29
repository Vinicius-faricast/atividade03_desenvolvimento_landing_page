const body = document.querySelector('.body');
const home = document.querySelector('#home');

export const navList = [
    {path: 'about-us', value: 'Quem Somos'},
    {path: 'services', value: 'Nossos Serviços'},
    {path: 'contact', value: 'Fale Conosco'}
]

export const createNavBar = () => {
    const header = document.createElement('header');
    header.classList.add('nav-bar');

    const nav = document.createElement('nav');
    nav.classList.add('container-itens');

    const brandNav = document.createElement('a');
    const attributeValue = home ?? "#home";
    brandNav.setAttribute("href", attributeValue);
    const h3 = document.createElement('h3');
    h3.classList.add('logo');
    h3.innerText = 'Consultoria ';

    const span = document.createElement('span');
    span.innerText = 'Financeira';

    const ul = document.createElement('ul');
    ul.classList.add('nav-itens');

    const listItem = navList.map(({path, value}) => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.setAttribute('href', `#${path}`);
        // a.setAttribute('id', `${path}`);
        a.innerText = value;

        li.appendChild(a);
        return li;
    });

    listItem.forEach(element => {
        ul.appendChild(element);
    });

    //menu mobile
    const mobileMenuDiv = document.createElement('div');
    mobileMenuDiv.classList.add('mobile-menu');
    const listLinesMobileMenu = [];
    for (let index = 0; index < 3; index++) {
        const line = document.createElement('div');
        line.classList.add(`line${index+1}`)
        listLinesMobileMenu.push(line);
    };

    listLinesMobileMenu.forEach(line => {
        mobileMenuDiv.appendChild(line);
    })
    
    h3.appendChild(span);
    brandNav.appendChild(h3)
    nav.appendChild(brandNav);
    nav.appendChild(mobileMenuDiv);
    nav.appendChild(ul);
    header.appendChild(nav);
    body.insertAdjacentElement('afterbegin', header);
};