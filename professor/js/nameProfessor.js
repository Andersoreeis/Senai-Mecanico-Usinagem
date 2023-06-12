window.addEventListener('DOMContentLoaded', function() {
    const nomeProfessor = localStorage.getItem('nomeProfessor');
    const spanNomeProfessor = document.getElementById('nome-professor');
    if (nomeProfessor && spanNomeProfessor) {
        const primeiroNome = nomeProfessor.split(' ')[0];
        spanNomeProfessor.textContent = primeiroNome;
    }
});