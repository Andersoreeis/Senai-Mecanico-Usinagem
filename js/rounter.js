import { renderTogglePassword } from './viewPassword.js';
import { renderInputCode } from './code.js';

const routes = {
  '/pageLoginProfessor': '../pageLogin/loginProfessor.html',
  '/pageLoginAluno': '../pageLogin/loginAluno.html',
  '/recover': '../pageLogin/recover.html',
  '/submite-code': '../pageLogin/code.html'
};

const route = async () => {
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

  if (path === '/submite-code') {
    renderInputCode();
  }
};

document.addEventListener('click', (event) => {
  const href = event.target.getAttribute('href');
  if (event.target.matches('a') && href !== './index.html' && href !== '../pageLogin/recover.html') {
    route();
  }
});
