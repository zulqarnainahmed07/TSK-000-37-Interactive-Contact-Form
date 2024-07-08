const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        // Show SweetAlert popup on successful validation
        Swal.fire({
            title: "Good job!",
            text: "Your form has been submitted successfully!",
            icon: "success"
        });
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    let isValid = true;

    if (nameValue === '') {
        setError(name, 'Name is required');
        isValid = false;
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
        isValid = false;
    } else if (phoneValue.length < 8) {
        setError(phone, 'Phone number must be at least 8 characters.');
        isValid = false;
    } else {
        setSuccess(phone);
    }

    if (subjectValue === '') {
        setError(subject, 'Subject is required');
        isValid = false;
    } else {
        setSuccess(subject);
    }

    if (messageValue === '') {
        setError(message, 'Please enter your message');
        isValid = false;
    } else {
        setSuccess(message);
    }

    return isValid;
};
