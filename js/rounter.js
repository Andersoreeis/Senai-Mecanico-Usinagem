import {
  renderTogglePassword,
  renderTogglePasswordChangePassword
} from './viewPassword.js';
import {
  renderInputCode
} from './code.js';

import {
  renderValidation
} from './loginAluno.js';


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
    renderTogglePassword();
  }

  if (path === '/pageLoginAluno') {
    renderTogglePassword();
    await renderValidation()
  }

  if (path === '/submite-code') {
    renderInputCode();
  }
 



  if (path === '/changeP') {
    renderTogglePasswordChangePassword();
    renderRedirection(title_studant, title_professor);
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