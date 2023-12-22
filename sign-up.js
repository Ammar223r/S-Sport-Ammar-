
// الشروط
// المتغيرات

const form =document.getElementById('form')

const name =document.getElementById('name')
const email =document.getElementById('email')
const password =document.getElementById('password')
const password2 =document.getElementById('password2')


form.addEventListener('submit' ,e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.add('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    
    errorDisplay.innerText = message;
    inputControl.classList.add('success')
    inputControl.classList.add('error')
    
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const validateInputs = () => {
    const nameValue= name.value.trim()
    const emailValue= email.value.trim()
    const passwordValue= password.value.trim()
    const password2Value= password2.value.trim()

    if (nameValue ==='' ){
        setError(name,'Please enter your Name');
    }
    else {
        setSuccess(name,'')
    }
    if (emailValue ==='') {
        setError(email,'required');
    }
    else if (!isValidateEmail(emailValue)){
        setError(email,'the email is not success')
    }
    else {
        setSuccess(email,'')
    }
    if (passwordValue ==='') {
        setError(password,'Please enter your password')
    }
    else if (passwordValue.length <8) {
        setError(password, '8 Number At Least')
    }
    else (
        setSuccess(password,'')
    )
    if (password2Value ==='') {
        setError(password2,'required')
    }
    else if (password2Value !== passwordValue) {
        setError(password2, 'The password does not match')
    }
    else {
        setSuccess(password2,'')
    }
};
// reg expression