import { renderTogglePassword, renderTogglePasswordChangePassword } from './viewPassword.js';
import { renderInputCode } from './code.js';
import { renderInputCodeAluno } from './codeAluno.js';


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

  const title_studant = document.getElementById('title-studant');
  const title_professor = document.getElementById('title-professor');

  function renderRedirection(title_studant, title_professor) {
    const back_direciton = document.getElementById('back_redirection');

    back_direciton.addEventListener('click', function () {
      if (title_studant || title_studant.textContent === 'Entre como Estudante') {
            navigateToPage('/pageLoginAluno');
        } else if(title_professor || title_professor.textContent === 'Entre como Professor'){
            navigateToPage('/pageLoginProfessor');
        }  else {
          console.log('Error');
        }
    });
}

  if (path === '/pageLoginProfessor') {
    renderTogglePassword();
  }
  
  if (path === '/pageLoginAluno') {
    renderTogglePassword();
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