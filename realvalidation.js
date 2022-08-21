const form = document.querySelector('form');
const username = document.querySelector('input[name="username"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="password1"]');
const thankyou = document.querySelector('.thankyou');

//validating your form
let isFormValid = false;

// validating your username
const validateUsername = () => {
    username.classList.remove('invalid');
    username.nextElementSibling.classList.add('hidden');
    username.nextElementSibling.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    // nested if for the conditions
    if (username.value.trim() == '') {
        username.classList.add('invalid');
        username.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
    
    if (username.value.length < 8 || username.value.length > 15) {
        username.classList.add('invalid');
        username.nextElementSibling.nextElementSibling.classList.remove('hidden');
        //alert('.Username must contain at least 8 charaters and must be less than 15 charaters');
        isFormValid = false;
    }
}

// validating your email
const validateEmail = () => {
    email.classList.remove('invalid');
    email.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    // nested if for the conditions
    if (email.value.trim() == '') {
        email.classList.add('invalid');
        email.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
}
// validating your password
const validatePassword = () => {
    password.classList.remove('invalid');
    password.nextElementSibling.classList.add('hidden');
    password.nextElementSibling.nextElementSibling.classList.add('hidden');
    password.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    // nested if for the conditions
    if (password.value.trim() == '') {
        password.classList.add('invalid');
        password.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
    if (password.value.length < 8 || password.value.length > 15) {
        password.classList.add('invalid');
        password.nextElementSibling.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
        //alert('Password must contain at least 8 charaters,1 uppercase,1 lowercase 1 digit, 1 symbol and must be less than 12 charaters');
    }
    if (username.value == password.value) {
        password.classList.add('invalid');
        password.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
        //alert('please you cannot use your username as password');
        //password.nextElementSibling.classList.remove('hidden1');
        
    }
}
//confirming your password
const validateConfirmPassword = () => {
    confirmPassword.classList.remove('invalid');
    confirmPassword.nextElementSibling.classList.add('hidden');
    confirmPassword.nextElementSibling.classList.add('hidden');
    confirmPassword.nextElementSibling.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    // nested if for the conditions
    if (confirmPassword.value.trim() == '') {
        confirmPassword.classList.add('invalid');
        confirmPassword.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('invalid');
        confirmPassword.nextElementSibling.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
        //alert('please you must enter the exact password');
    }
}

//adding event listener to submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    if (isFormValid) {
        form.remove();
        thankyou.classList.remove('hidden2')
    }
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmPassword.value);
});
username.addEventListener('input', (e) =>{
    validateUsername();
});
username.addEventListener('change', (e) =>{
    validateUsername();
});
password.addEventListener('input', (e) =>{
    validatePassword();
});
confirmPassword.addEventListener('input', (e) =>{
    validateConfirmPassword();
});
email.addEventListener('input', (e) =>{
    validateEmail();
});
