// local storage to change photo 
document.getElementById('image').onchange = function () {

    localStorage.setItem("image", document.getElementById("image").value)
    document.body.style.backgroundImage=localStorage.getItem("image")
}
document.getElementById('im2').onclick = function () {
    localStorage.setItem("image", "url(./image/home2.jpg")
    document.body.style.backgroundImage=localStorage.getItem("image")
}

document.getElementById('im3').onclick = function () {
    localStorage.setItem("image", "url(./image/home3.png)")
    document.body.style.backgroundImage=localStorage.getItem("image")
}

// // show login in home 
// let login = document.querySelector('.login')
// let close= document.querySelector(".close")
// let productBtn= document.querySelector("#showLogin");


// // show login in home 
// productBtn.addEventListener('click',()=>{
//     login.style.display="grid";
// });
// close.addEventListener('click',()=>{
//     login.style.display="none";
// });

// // login red 
// const form =document.getElementById('form')
// const email =document.getElementById('email')
// const password =document.getElementById('password')


// form.addEventListener('submit' ,e => {
//     e.preventDefault();

//     validateInputs();
// })

// const setError = (element,message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error')
    
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error')
//     inputControl.classList.add('success')
// }
// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error')
    
//     errorDisplay.innerText = message;
//     inputControl.classList.add('success')
//     inputControl.classList.add('error')
    
// }

// const validateEmail = (email) => {
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };


// const validateInputs = () => {
//     const emailValue= email.value.trim()
//     const passwordValue= password.value.trim()

//     if (emailValue ==='') {
//         setError(email,'required');
//     }
//     else if (!isValidateEmail(emailValue)){
//         setError(email,'the email is not success')
//     }
//     else {
//         setSuccess(email,'')
//     }
//     if (passwordValue ==='') {
//         setError(password,'Please enter your password')
//     }
//     else if (passwordValue.length <8) {
//         setError(password, '8 Number At Least')
//     }
//     else (
//         setSuccess(password,'')
//     )
// };
// // reg expression


