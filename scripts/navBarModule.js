const body = document.querySelector('.body');
const home = document.querySelector('#home');

const navList = [
    {path: 'index.html#about-us', value: 'Quem Somos'},
    {path: 'services.html', value: 'Nossos Serviços'},
    {path: '#', value: 'Fale Conosco'}
]

const createNavBar = () => {
    const header = document.createElement('header');
    header.classList.add('nav-bar');

    const nav = document.createElement('nav');
    nav.classList.add('container-itens');

    const brandNav = document.createElement('a');
    const attributeValue = home ? "#home" : "index.html";
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

        a.setAttribute('href', path);
        a.innerText = value;

        li.appendChild(a);
        return li;
    });

    console.log(listItem)

    listItem.forEach(element => {
        ul.appendChild(element);
    });

    
    h3.appendChild(span);
    brandNav.appendChild(h3)
    nav.appendChild(brandNav);
    nav.appendChild(ul);
    header.appendChild(nav);
    body.insertAdjacentElement('afterbegin', header);
}

createNavBar()