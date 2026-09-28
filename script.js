const form = document.getElementById('loginForm');
const messageBox = document.getElementById('formMessage');

if (form && messageBox) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentNumber = document.getElementById('studentNo');
        const password = document.getElementById('password');

        if (!studentNumber || !password) {
            messageBox.textContent = 'Please fill in your login details.';
            return;
        }

        const studentValue = studentNumber.value.trim();
        const passwordValue = password.value.trim();

        if (!studentValue || !passwordValue) {
            messageBox.textContent = 'Please enter your registration number and password.';
            return;
        }

        messageBox.textContent = 'Login details accepted. Redirecting...';
        form.reset();
    });
}