window.addEventListener('DOMContentLoaded', function() {
  const nomeAluno = localStorage.getItem('nomeAluno');
  const spanNomeAluno = document.getElementById('nome-aluno');
  if (nomeAluno && spanNomeAluno) {
    const primeiroNome = nomeAluno.split(' ')[0];
    spanNomeAluno.textContent = primeiroNome;
  }
});
