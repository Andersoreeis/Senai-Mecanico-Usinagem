'use strict';

import { verificationStundant } from "./api.js";

function isInputEmpty(inputElement) {
  return inputElement.value.trim() === '';
}

export async function renderValidationStudant() {
  const btnEnterAluno = document.getElementById('btn-enter-aluno');
  const emailInput = document.getElementById('email-input-aluno');
  const passwordInput = document.getElementById('password-input-aluno');

  btnEnterAluno.addEventListener('click', async function() {
    if (isInputEmpty(emailInput) || isInputEmpty(passwordInput)) {
      console.log('Por favor, preencha todos os campos.');
      emailInput.classList.add('input-error')
      passwordInput.classList.add('input-error')
      return;
    }

    const email = emailInput.value.toString();
    const password = passwordInput.value.toString();

    const validate = await verificationStundant(email, password);

    if (validate && validate.alunos && Array.isArray(validate.alunos)) {
      let isAuthenticated = false;
     

      validate.alunos.forEach(getAlunos => {
        localStorage.setItem('nomeAluno', getAlunos.nome)
        console.log( localStorage.getItem('nomeALuno'));
        if (getAlunos.email === email && getAlunos.senha_email === password) {
          isAuthenticated = true;
          
          

        }
      });

      if (isAuthenticated) {
        window.location.href = "../aluno/html/pageInit.html";
      } else {
        console.log('Error');
        emailInput.classList.add('input-error')
        passwordInput.classList.add('input-error')
      }
    } else {
      emailInput.classList.add('input-error')
      passwordInput.classList.add('input-error')
      console.log('Error: Invalid response from verification.');
      
    }
  });
}
