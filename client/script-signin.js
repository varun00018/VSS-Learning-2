document.addEventListener('DOMContentLoaded', function () {
    // Get all necessary DOM elements
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    // Debug log to check if elements are found
    console.log('Sign Up Form:', signUpForm);
    console.log('Sign In Form:', signInForm);

    // Toggle between sign-up and sign-in forms
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // Handle sign-in form submission
    signInForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        console.log('Sign in form submitted');

        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        console.log('Form values:', { email, password });

        if (email && password) {
            try {
                const res = await fetch('https://vss-learning-2.onrender.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();
                if (res.ok) {
                    alert('Login successful!');
                    window.location.href = 'dashboard.html';
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('An error occurred while logging in');
            }
        } else {
            alert('Please fill in all fields');
        }
    });

    // Handle sign-up form submission
    signUpForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        console.log('Sign up form submitted');

        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;

        console.log('Form values:', { name, email, password });

        if (name && email && password) {
            try {
                const res = await fetch('https://vss-learning-2.onrender.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await res.json();
                if (res.ok) {
                    alert('Registration successful!');
                    window.location.href = 'dashboard.html';
                } else {
                    alert(data.message || 'Registration failed');
                }
            } catch (err) {
                console.error('Registration error:', err);
                alert('An error occurred while registering');
            }
        } else {
            alert('Please fill in all fields');
        }
    });
});

// Check if script is loaded
console.log('Login script loaded');
