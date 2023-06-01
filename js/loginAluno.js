'use strict';

import { verification } from "./api.js";

function isInputEmpty(inputElement) {
  return inputElement.value.trim() === '';
}

export async function renderValidation() {
  const btnEnterAluno = document.getElementById('btn-enter-aluno');
  const emailInput = document.getElementById('email-input-aluno');
  const passwordInput = document.getElementById('password-input-aluno');

  btnEnterAluno.addEventListener('click', async function() {
    if (isInputEmpty(emailInput) || isInputEmpty(passwordInput)) {
      console.log('Por favor, preencha todos os campos.');
      return;
    }

    const email = emailInput.value.toString();
    const password = passwordInput.value.toString();

    const validate = await verification(email, password);

    if (validate && validate.aluno && Array.isArray(validate.aluno)) {
      let isAuthenticated = false;

      validate.aluno.forEach(getAlunos => {
        if (getAlunos.matricula === email && getAlunos.senha === password) {
          isAuthenticated = true;
        }
      });

      if (isAuthenticated) {
        window.location.href = "../aluno/html/pageInit.html";
      } else {
        console.log('Error');
      }
    } else {
      console.log('Error: Invalid response from verification.');
    }
  });
}
