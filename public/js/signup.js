const signUpFormEl = $('.signup-form');
const signUpNameEl = $('#name-signup');
const signUpEmailEl = $('#email-signup');
const signUpPasswordEl = $('#password-signup');

signUpFormEl.on('submit', async (event) => {
    event.preventDefault();

    const name = $.trim(signUpNameEl.val());
    const email = $.trim(signUpEmailEl.val());
    const password = $.trim(signUpPasswordEl.val());

    if (name && email && password) {
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