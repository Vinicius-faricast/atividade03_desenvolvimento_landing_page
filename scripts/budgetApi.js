const createItem = (h1Text, dataJsValue) => {
    const ul = document.querySelector('.list-budget');

    const li = document.createElement('li');
    li.classList.add('item-budget');
    li.setAttribute('data-js', dataJsValue);

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('item-budget-img');
    img.setAttribute('src', `assets/${dataJsValue}.png`);

    const title = document.createElement('h1');
    title.classList.add('item-budget-title');
    title.innerText = h1Text;

    const btn = document.createElement('button');
    btn.classList.add('item-btn-delete');
    btn.setAttribute('data-js', dataJsValue);

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash-can', 'fa-lg');
    icon.style['color'] = '#fff';
    icon.setAttribute('data-js', dataJsValue);

    div.appendChild(img);
    div.appendChild(title);

    btn.appendChild(icon);

    li.appendChild(div);
    li.appendChild(btn);

    ul.appendChild(li);
};

export const budgetApi = () => {
    const articles = document.querySelectorAll('.article-services');

    articles.forEach(article => {
        article.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-js');
            const [, , h2,] = document.querySelectorAll(`[data-js = ${target}]`);
            const title = h2.innerText;

            createItem(title, target)
            // console.log(h2);

            const btnsDelet = document.querySelectorAll('.item-btn-delete');
            if (btnsDelet) {
                btnsDelet.forEach(btnDelet => {
                    btnDelet.addEventListener('click', (e) => {
                        const target = e.target.getAttribute('data-js');
                        const lis = document.querySelectorAll(`li`);

                        lis.forEach(li => {

                            if(li.getAttribute('data-js') === target){
                                li.remove()
                            }
                        })
                    })
                })
            }
            // console.log(btnDelet);

        });
    });
};
