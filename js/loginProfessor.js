'use strict';

import { verificationProfessor } from "./api.js";

function isInputEmpty(inputElement) {
    return inputElement.value.trim() === '';
}

export async function renderValidationProfessor() {
    const btnEnterAluno = document.getElementById('btn-enter-professor');
    const emailInput = document.getElementById('email-input-professor');
    const passwordInput = document.getElementById('password-input-professor');

    btnEnterAluno.addEventListener('click', async function () {
        if (isInputEmpty(emailInput) || isInputEmpty(passwordInput)) {
            console.log('Por favor, preencha todos os campos.');
            emailInput.classList.add('input-error');
            passwordInput.classList.add('input-error');
            return;
        }

        const email = emailInput.value.toString();
        const password = passwordInput.value.toString();

        const validate = await verificationProfessor(email, password);

        if (validate && validate.professor && Array.isArray(validate.professor)) {
            let isAuthenticated = false;



            // validate.professor.forEach(getProfessor => {
            //     console.log(getProfessor.email);
            //     if (getProfessor.email === email && getProfessor.senha === password) {
            //         isAuthenticated = true;
            //         emailInput.classList.remove('input-error');
            //         passwordInput.classList.remove('input-error');
            //         localStorage.setItem('nomeProfessor', getProfessor.nome);
            //         console.log(localStorage.getItem('nomeProfessor'));
            //     }
            // });

            validate.professor.forEach(getProfessor => {
                localStorage.setItem('nomeProfessor', getProfessor.nome)
                console.log( localStorage.getItem('nomeProfessor'));
                if (getProfessor.email === email && getProfessor.senha === password) {
                  isAuthenticated = true;
                }
            });

            if (isAuthenticated) {
                window.location.href = "../professor/html/pageInitProfessor.html";
            } else {
                console.log('Error');
                emailInput.classList.add('input-error');
                passwordInput.classList.add('input-error');
            }
        } else {
            console.log('Error: Invalid response from verification.');
            emailInput.classList.add('input-error');
            passwordInput.classList.add('input-error');
        }
    });
}
