import { cleanBudget } from "./budgetApi.js";

const createModal = (form, message) => {
    const body = document.querySelector('.body');

    form.addEventListener('submit', e => {
        e.preventDefault()
 
        const modal = document.createElement('dialog');
        modal.classList.add('modal-configs');
        modal.innerText = message;
        body.appendChild(modal);
        modal.showModal();

        setTimeout(() => {
            modal.remove();
        }, 2000);
    });
};

export const popUpNewsletter = () => {
    const formNewsletter = document.querySelector('.newsletter-form');
    if(formNewsletter){
        createModal(formNewsletter, 'Assinatura realizada com sucesso!');
    }
}

export const popUpContact = () => {
    const contactForm = document.querySelector('.contact-form');
    if(contactForm){
        createModal(contactForm, 'Mensagem enviada com sucesso!');
    }
}

export const popUpBudget = () => {
    const budgetForm = document.querySelector('.budget-contact');
    budgetForm.addEventListener('submit', () => {
        createModal(budgetForm, 'Orçamento enviado com sucesso!');
        cleanBudget()
    })
}