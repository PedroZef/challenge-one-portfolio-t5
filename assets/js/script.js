const messages = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um nome válidos.',
        tooShort: 'Por favor, preencha um nome válido.',
    },
    email: {
        valueMissing: 'O campo de e-mail não pode estar vazio.',
        typeMismatch: 'Por favor, preencha um email válido.',
        tooShort: 'Por favor, preencha um e-mail válido.',
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode estar vazio.',
        patternMismatch: 'Por favor, preencha com um assunto válido.',
        tooShort: 'O campo de assunto não tem caracteres suficientes.',
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        patternMismatch: 'Por favor, preencha com uma mensagem válida.',
        tooShort: 'O campo de mensagem não tem caracteres suficientes.',
    },
};

const formsInput = document.querySelectorAll('[required]');

formsInput.forEach((field) => {
    field.addEventListener('blur', () => checkFieldValidity(field));
});

const errorTypes = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooShort',];

function checkFieldValidity(field) {
    let message = '';

    errorTypes.forEach((errorType) => {
        if (field.validity[errorType]) {
            message = messages[field.name][errorType];
            console.log(message);
        }
    });

    const messageError = field.parentNode.querySelector('.formcontato__error');
    const inputCheck = field.checkValidity();

    if (!inputCheck) {
        messageError.textContent = message;
    } else {
        messageError.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
