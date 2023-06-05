window.addEventListener('DOMContentLoaded', function() {
    const nomeAluno = localStorage.getItem('nomeAluno');
    const spanNomeAluno = document.getElementById('nome-aluno')
    if (nomeAluno && spanNomeAluno) {
      spanNomeAluno.textContent = nomeAluno.substring(0, 20) + '...';
    }
  });