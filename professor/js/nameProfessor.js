window.addEventListener('DOMContentLoaded', function() {
    const nomeProfessor = localStorage.getItem('nomeProfessor');
    const spanNomeProfessor = document.getElementById('nome-professor');
    if (nomeProfessor && spanNomeProfessor) {
        spanNomeProfessor.textContent = nomeProfessor.substring(0, 20) + '...';;
    }
});