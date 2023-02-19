function  copyMessage(){
    let insertText = document.querySelector('.insert-text-message');
    let buttons = document.querySelectorAll('.show-message');
    let hiddenText = document.querySelectorAll('.message-hide');

    if(buttons){
        buttons.forEach((but, i) => {
            but.addEventListener('click', function (event) {
                insertText.innerText = hiddenText[i].innerText;
            });
        });
    }
}

function closeAlertPopUp(){
    let closeButton = document.querySelectorAll('.close-alert');
    let AlertPopUp = document.querySelectorAll('.alert');

    if(closeButton){
        closeButton.forEach((button, n) => {
            button.addEventListener('click', function (event) {
                AlertPopUp[n].style.display = "none";
            });
        });

    }

}

function noEmptyFormInputs(){
    const titleInput = document.querySelector('.title-input');
    const emailInput = document.querySelector('.email-input');
    const textInput = document.querySelector('.text-input');
    const form = document.querySelector('.sendmail-form');

    const checkTitle = () => {

        let valid = false;

        const min = 5,
            max = 200;

        const title = titleInput.value.trim();

        if (!isRequired(title)) {
            showError(titleInput, 'Title cannot be blank.');
        } else if (!isBetween(title.length, min, max)) {
            showError(titleInput, `Title must be between ${min} and ${max} characters.`)
        } else {
            showSuccess(titleInput);
            valid = true;
        }
        return valid;
    };

    const checkText = () => {

        let valid = false;

        const min = 5,
            max = 245;

        const text = textInput.value.trim();

        if (!isRequired(text)) {
            showError(textInput, 'Text cannot be blank.');
        } else if (!isBetween(text.length, min, max)) {
            showError(textInput, `Text must be between ${min} and ${max} characters.`)
        } else {
            showSuccess(textInput);
            valid = true;
        }
        return valid;
    };

    const checkEmail = () => {
        let valid = false;
        const email = emailInput.value.trim();
        if (!isRequired(email)) {
            showError(emailInput, 'Email cannot be blank.');
        } else if (!isEmailValid(email)) {
            showError(emailInput, 'Email is not valid.')
        } else {
            showSuccess(emailInput);
            valid = true;
        }
        return valid;
    };

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isRequired = value => value === '' ? false : true;
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove('success');
        formField.classList.add('error');

        // show the error message
        const error = formField.querySelector('small');
        error.textContent = message;
    };
    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');

        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
    }

    form.addEventListener('submit', function (e) {
        // e.preventDefault();

        let isTitleValid = checkTitle(),
            isEmailValid = checkEmail(),
            isTextValid = checkText();

        let isFormValid = isTitleValid &&
            isEmailValid &&
            isTextValid;

        if (isFormValid) {
            e.currentTarget.submit();
        }

    });

}

document.addEventListener('DOMContentLoaded', () => {
    copyMessage();
    closeAlertPopUp();
    noEmptyFormInputs();
});
