const body = document.querySelector('.body');

const iconList = ['fa-linkedin', 'fa-square-instagram', 'fa-square-whatsapp'];

export const createFooter = () => {
    //Created footer
    const footer = document.createElement('footer');
    const footerContent = document.createElement('div')
    footerContent.classList.add('footer-content');

    //created brand footer
    const logoFooter = document.createElement('h3');
    logoFooter.classList.add('logo-footer');
    logoFooter.innerText = 'Consultoria ';

    const  span = document.createElement('span');
    span.innerText = "Financeira";
    logoFooter.appendChild(span);

    //created contacts social medias
    const sociaMedia = document.createElement('div');
    sociaMedia.classList.add('social-media');
    const textContact = document.createElement('h3');
    textContact.innerText = 'Contato';
    const iconListTags = iconList.map(item => {
        const icon = document.createElement('i');
        icon.classList.add('fa-brands');
        icon.classList.add(item);
        icon.classList.add('fa-xl')
        return icon;
    })

    //created form footer
    const formFooter = document.createElement('div');
    formFooter.classList.add('form-footer');

    const form = document.createElement('form');
    const titleForm = document.createElement('h3');
    titleForm.innerText = 'Newsletter';

    const paragraphForm = document.createElement('p');
    paragraphForm.innerText = 'Saiba tudo sobre o mundo dos negócios!';

    const emailField = document.createElement('input');
    emailField.classList.add('email-field');
    emailField.setAttribute('type', "email");
    emailField.setAttribute('placeholder', "Coloque seu e-mail");
    emailField.setAttribute('required', '');

    const button = document.createElement('input');
    button.setAttribute('id', 'btn');
    button.setAttribute('type', "submit");
    button.setAttribute('value', 'enviar');

    const btnSkin = document.createElement('label');
    btnSkin.setAttribute('for', 'btn');
    const iconBtn = document.createElement('i');
    iconBtn.classList.add('fa-regular', 'fa-paper-plane');
    btnSkin.appendChild(iconBtn);

    form.appendChild(titleForm);
    form.appendChild(paragraphForm);
    form.appendChild(emailField);
    form.appendChild(button);
    form.appendChild(btnSkin);
    formFooter.appendChild(form);

    // add elements in social media group
    sociaMedia.appendChild(textContact);
    iconListTags.forEach(element => {
        sociaMedia.appendChild(element);
    })

    // add elements in footer
    footerContent.appendChild(logoFooter);
    footerContent.appendChild(sociaMedia);
    footerContent.appendChild(formFooter);
    footer.appendChild(footerContent);
    body.appendChild(footer);
}
