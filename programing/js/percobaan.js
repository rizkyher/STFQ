//validation code for input
var emai =  document.querySelector('#email-error'); 
var Password =  document.querySelector('#pass-error');

var email_error = document.getElementById('email-error');
var pass_error = document.getElementById('pass-error');

Email.addEventListener('textinput', 'email_verivy');
Password.addEventListener('textinput', 'pass_verivy');

function validated(){
    if (Email.value.length  < 9) {
        email.style.border = "1px solid red";
        email_error.style = "block";
        email.focus();
        return false
    }
    if (Password.value.length  < 6) {
        Password.style.border = "1px solid red";
        pass_error_error.style = "block";
        Password.focus();
        return false
    }
}

function email_verivy(){
    if (email.value.length >=8){
        email.style.border = "1px solid silver";
        email_error.style = "none";
        return true
    }
}
function pass_verivy(){
    if (Password.value.length >=5){
        Password.style.border = "1px solid silver";
        pass_error.style = "none";
        return true
    }
}