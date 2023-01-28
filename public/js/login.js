const loginFormEl = $('.login-form');
const loginEmailEl = $('#email-login');
const loginPasswordEl = $('#password-login');

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
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
});