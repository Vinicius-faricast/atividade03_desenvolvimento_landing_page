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

    if (ul) {

        ul.appendChild(li);
    }
};

const setLocalStorage = (idValue, titleValue, imgValue) => {

    const budget = {
        id: idValue,
        title: titleValue,
        img: imgValue
    };

    const list = localStorage.getItem('listBudget')
    let newList

    if (list) {
        newList = JSON.parse(list);
        let index = newList.findIndex(item => item.id === budget.id)
        if (index >= 0) {

            return;
        };

    } else {
        newList = []
    }

    newList = [...newList, budget]

    localStorage.setItem('listBudget', JSON.stringify(newList));

    createItem(titleValue, idValue);
    
}

const renderList = () => {
    const list = localStorage.getItem('listBudget');
    const ul = document.querySelector('.list-budget');
    if(ul) ul.innerHTML = ''
    let newList

    if (list) {
        newList = JSON.parse(list);
        newList.forEach(({ id, title }) => {
            createItem(title, id)
        })
    } else {
        newList = []
    }
}

const deleteItemList = (e) => {
    const target = e.target.getAttribute('data-js');
    const lis = document.querySelectorAll(`li`);

    lis.forEach(li => {

        if (li.getAttribute('data-js') === target) {

            const list = localStorage.getItem('listBudget');
            let newList = JSON.parse(list);

            newList = newList.filter(item => item.id !== target);
            localStorage.setItem('listBudget', JSON.stringify(newList));

            li.remove()

        }
    })
}

export const budgetApi = () => {
    renderList()

    const articles = document.querySelectorAll('.article-services');
    let btnsDelet = document.querySelectorAll('.item-btn-delete');
    
    articles.forEach(article => {
        article.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-js');
            const [, , h2,] = document.querySelectorAll(`[data-js = ${target}]`);
            const title = h2.innerText;

            setLocalStorage(target, title, target);

            btnsDelet = document.querySelectorAll('.item-btn-delete');
            if (btnsDelet.length > 0) {
                btnsDelet.forEach(btnDelet => {
                    btnDelet.addEventListener('click', e => {
                        deleteItemList(e);
                    })
                })
            }
        });
    });

};
