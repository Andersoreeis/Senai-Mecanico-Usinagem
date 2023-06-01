 export function renderTogglePassword() {
    const passwordInput = document.getElementById('password-input-aluno');
    const togglePassword = document.getElementById('toggle-password');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
    
    
}

export function renderTogglePasswordChangePassword() {
    const passwordInput = document.getElementById('password-new');
    const togglePassword = document.getElementById('new-password');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
    
    
}
