const loginFormEl = $('.login-form');
const loginEmailEl = $('#email-login');
const loginPasswordEl = $('#password-login');
const signUpFormEl = $('.signup-form');
const signUpNameEl = $('#name-signup');
const signUpEmailEl = $('#email-signup');
const signUpPasswordEl = $('#password-signup');

loginFormEl.on('submit', async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = $.trim(loginEmailEl.val());
  const password = $.trim(loginPasswordEl.val());

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
});

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
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
});