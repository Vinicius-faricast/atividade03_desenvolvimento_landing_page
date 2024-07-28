import { createFooter } from "./footerModule.js";
import { createMobileMenu } from "./mobileNavbar.js";
import { createNavBar } from "./navBarModule.js";

const root = document.querySelector('#root');

const validateHash = (hash) => hash === ""  ? 'home' : hash.replace('#', '');

const renderPages = () => {
    let hash = window.location.hash;
    console.log(window.location.hash ==='#about-us')
    if(window.location.hash ==='#about-us'){
        hash = '';
    }

    hash = validateHash(hash);

    root.innerHTML = '';

    const url = `./${hash}.html`;

    fetchPages(url);
}

const init = () => window.addEventListener('hashchange', renderPages)

export const insertPages = () => {
    window.addEventListener('load', () => {
        createNavBar();
        createMobileMenu();
        createFooter();
        renderPages();
        init()
    })
}

export const fetchPages = async (url) => {
    try {
        const response = await fetch(url);
        const htmlInText = await response.text();
        root.innerHTML = htmlInText;
    } catch (error) {
        throw new Error(`Erro ao carregar o arquivo: ${error}`);
    }

}

// <!-- index.html -->
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Injeção de Conteúdo com Fetch API</title>
// </head>
// <body>
//     <div id="content"></div>

//     <script>
//         // Caminho para o arquivo HTML externo
//         const url = './contato.html';

//         // Fazendo a requisição para o arquivo HTML externo
//         fetch(url)
//             .then(response => {
//                 // Verificando se a requisição foi bem-sucedida
//                 if (!response.ok) {
//                     throw new Error(`Erro ao carregar o arquivo: ${response.status}`);
//                 }
//                 return response.text(); // Extrai o corpo da resposta como texto
//             })
//             .then(html => {
//                 // Injetando o conteúdo HTML no elemento desejado
//                 document.getElementById('content').innerHTML = html;
//             })
//             .catch(error => console.error('Erro:', error));
//     </script>
// </body>
// </html>


