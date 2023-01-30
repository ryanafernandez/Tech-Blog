const signUpFormEl = $('.signup-form');
const signUpNameEl = $('#name-signup');
const signUpEmailEl = $('#email-signup');
const signUpPasswordEl = $('#password-signup');

signUpFormEl.on('submit', async (event) => {
    event.preventDefault();

    const name = $.trim(signUpNameEl.val());
    const email = $.trim(signUpEmailEl.val());
    const password = $.trim(signUpPasswordEl.val());

    if (!email) {
        alert('Please enter an email address');
    } else if (!password) {
        alert('Please enter a password');
    } else if (password.length < 8) {
        alert('Your password must be at least 8 characters long');
    } else if (!name) {
        alert('Please enter your name');
    } else {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
});