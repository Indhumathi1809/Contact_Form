function submitForm(event) {
    event.preventDefault();

    // Basic email validation
    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value;

    if (!isValidEmail(emailValue)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    // Form submission logic (you can customize this part)
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Form submitted successfully!'
    });
    document.getElementById('contactForm').reset();
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
