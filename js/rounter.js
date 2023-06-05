import {
  renderTogglePassword,
  renderTogglePasswordChangePassword
} from './viewPassword.js';

import {
  renderInputCode
} from './code.js';

import {
  renderInputCodeAluno
} from './codeAluno.js';


import {
  renderValidationStudant
} from './loginAluno.js';

import {
  renderValidationProfessor
} from './loginProfessor.js';



const routes = {
  '/pageLoginProfessor': '../pageLogin/loginProfessor.html',
  '/pageLoginAluno': '../pageLogin/loginAluno.html',
  '/recover': '../pageLogin/recover.html',
  '/recoverAluno': '../pageLogin/recoverAluno.html',
  '/submite-code-Aluno': '../pageLogin/codeAluno.html',
  '/submite-code': '../pageLogin/code.html',
  '/changeP': '../pageLogin/newP.html',
  '/changeAluno': '../pageLogin/newAluno.html'
};

export const route = async () => {
  event.preventDefault();

  const href = event.target.getAttribute('href');
  window.history.pushState({}, '', href);
  const path = window.location.pathname;

  const response = await fetch(routes[path]);
  const html = await response.text();
  document.getElementById('root').innerHTML = html;

  if (path === '/pageLoginProfessor') {
    renderTogglePasswordChangePassword();
    await renderValidationProfessor()
  }

  if (path === '/pageLoginAluno') {
    renderTogglePassword();
    await renderValidationStudant()
  }

  if (path === '/submite-code') {
    renderInputCode();
  }
  if (path === '/submite-code-Aluno') {
    renderInputCodeAluno()
  }


  if (path === '/changeAluno') {
    renderTogglePassword();
  }

  if (path === '/changeP') {
    renderTogglePasswordChangePassword();
  }
};

document.addEventListener('click', (event) => {
  const href = event.target.getAttribute('href');
  if (event.target.matches('a') && href !== './index.html' && href !== '../pageLogin/recover.html') {
    route(event);
  }


});

export const navigateToPage = (url) => {
  window.history.pushState(null, null, url);
  route();
};