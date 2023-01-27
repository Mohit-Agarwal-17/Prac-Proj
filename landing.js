// const togglePass = $("#togglePassword");
// const pass = $("#password");

// togglePass.click(function()
// {
//     const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
//     pass.setAttribute('type', type);
//     this.classList.toggle('bi-eye')

//     var type;
//     if (pass.getAttribute('type' === 'password')) 
//     {
//         type = "password";
//     } 
//     else 
//     {
//         type = "text";    
//     }

//     pass.setAttribute('type', type);
//     this.classList.toggle('bi-eye');
// })

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});