const form = document.querySelector('form');
const button = document.querySelector('.create')
const password = document.querySelector('#user_password');
const passwordConf = document.querySelector('#user_password2');
const errorMsg = document.querySelector('.pass-error-msg');
const p = document.createElement('p');

passwordConf.addEventListener('input', function (event) {
    if (passwordConf.value !== password.value && passwordConf.value !== '') {
        errorMsg.textContent = "Password does not match. Re-enter password";
        passwordConf.classList.add('error');
        button.setAttribute('disabled', true);

    }
    else {
        passwordConf.classList.remove('error');
        errorMsg.textContent = '';
        button.disabled = false;
    }
});