const loginFormHandler = async (event) => {
  event.preventDefault();
console.log('t');
  // Collect values from the login form
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#pwd').value.trim();

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
};
/*
const cartEventListener = async (event) => {
  event.preventDefault();
console.log('t=====================================');  

    if (response.ok) {
      // If successful, redirect the browser to the  page
      document.location.replace('/cart');
    } else {
      alert(response.statusText);
    }
  
};
*/

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#pwd').value.trim();

  const name = `${firstName} ${lastName}`;

  if (firstName  && lastName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')?.addEventListener('submit', loginFormHandler);
  document
  .querySelector('.noPad')?.cartEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')?.addEventListener('submit', signupFormHandler);
