
document.getElementById('form-input').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(document.getElementById('form-input'))
    email = data.get('Email');
    password = data.get('Password');
   let emailVal =  emailValidate(email);
    let passVal = passwordValidate(password);
    if(emailVal== true && passVal == true){
        console.log('Passed =>', 'Email=> ', email);
        alert('Form Submitted');
    }
    
})

const emailErr = document.getElementById('error-email')
const passErr = document.getElementById('error-password')

const emailValidate = (email) => {
    pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email.length !== 0 ){
        if(email.match(pattern)){
            emailErr.innerText = ''
            return true
        }
        else {
            emailErr.innerText = 'Please input valid Email';
            emailErr.classList.add('c-error');
            emailErr.classList.add('warn');
            setTimeout( () => {
                emailErr.innerText = '';
                emailErr.classList.remove('c-error');
                emailErr.classList.remove('warn');
            }, 5000)
          
        }
    }else{
        emailErr.innerText = 'Enter Email!!';
        emailErr.classList.add('c-error');
        emailErr.classList.add('warn');
        setTimeout( () => {
            emailErr.innerText = '';
            emailErr.classList.remove('c-error');
            emailErr.classList.remove('warn');
        }, 5000) 
    }
        
    
    console.log('Email Validation active', email);
}

const passwordValidate = (password) => {
    passPatt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if(password.length !== 0){
        if(password.match(passPatt)){
            passErr.innerText = ''
            return true
        }
        else {
            passErr.innerText = 'Password must be 8 character and must be AlphaNumeric';
            passErr.classList.add('c-error');
            passErr.classList.add('warn');
            setTimeout( () => {
                passErr.innerText = '';
                passErr.classList.remove('c-error');
                passErr.classList.remove('warn');
                // passErr.classList.add('hide');
            }, 5000) 
        }
    }else {
        passErr.innerText = 'Password is Required';
        passErr.classList.add('c-error');
        passErr.classList.add('warn');
        setTimeout( () => {
            passErr.innerText = '';
            passErr.classList.remove('c-error');
            passErr.classList.remove('warn');
            // passErr.classList.add('hide');
        }, 5000) 
    }
   
    console.log('Password Validation Active', password);
}