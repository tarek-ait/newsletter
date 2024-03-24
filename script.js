const errorMessage = document.getElementById('error-msg');
const emailField = document.getElementById('email-field');
const mainPage = document.getElementById('main-page');
const successPage = document.getElementById('success-page');
const dismissButton = document.getElementById('dismiss');
function validateEmail() {
    const errorMessage = document.getElementById('error-msg');
    const emailField = document.getElementById('email-field');
    const email = emailField.value.trim();
    const emailRegex = /^[A-Za-z0-9._\-]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}$/;

    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = 'Valid email required';
        emailField.style.color= 'hsl(4, 100%, 67%)';
        emailField.style.backgroundColor = 'hsla(4, 100%, 67%, 0.136)';
        emailField.style.borderColor = 'hsl(4, 100%, 67%)';
        return false;
    }else{
        mainPage.style.display = 'none'
        successPage.style.display = 'block'
    }

   
    return true;
}

emailField.addEventListener('input', function() {
    errorMessage.innerHTML = '';
    emailField.style.color= 'rgb(87, 84, 84)';
    emailField.style.backgroundColor = 'white';
    emailField.style.borderColor = 'rgb(198, 195, 195)';

});

dismissButton.addEventListener('click', () => { 
    successPage.style.display = 'none'
    mainPage.style.display = 'block'
})