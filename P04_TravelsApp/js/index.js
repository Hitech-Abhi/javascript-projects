console.log('Welcome to Project 4');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

// console.log(name, email, phone);

name.addEventListener('blur', ()=>{
    console.log('name is blurred');
    //validate name here
    let regex = /^[a-zA-Z]([a-zA-Z0-9]){2,9}$/;
    let str = name.value;
    console.log(regex,str);
    if (regex.test(str)) {
        console.log('name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        console.log('name is invalid');
        name.classList.add('is-invalid');
        validName = false;
    } 
});

email.addEventListener('blur', ()=>{
    console.log('email is blurred');
    //validate email here
    let regex = /^([a-zA-Z0-9\-\._]+)@([a-zA-Z0-9\-\._]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex,str);
    if (regex.test(str)) {
        console.log('email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('email is invalid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', ()=>{
    console.log('phone is blurred');
    //validate phone here
    let regex = /^[1-9]([0-9]){9}$/;
    let str = phone.value;
    console.log(regex,str);
    if (regex.test(str)) {
        console.log('phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('phone is invalid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked to Submit form');
    console.log(validName,validEmail,validPhone);
    
    
    //submit your form here
    if (validName && validEmail && validPhone) {
        console.log('User, Email and Phone are valid, submitting form');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#success').show();
        $('#failure').hide();
    }
    else{
        console.log('one out of User, Email or Phone are invalid, Please correct errors and submit again');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#failure').show();
        $('#success').hide();
    }


})
