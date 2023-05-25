import {renderTogglePassword} from './viewPassword.js'

const routes = {
    '/pageLoginProfessor': '../pageLogin/loginProfessor.html',
    '/pageLoginAluno': '../pageLogin/loginAluno.html',
    
  };
  
  const route = async () => {
    event.preventDefault();
  
    const href = event.target.getAttribute('href');
    window.history.pushState({}, '', href);
    const path = window.location.pathname;
    
  
    const response = await fetch(routes[path]);
    const html = await response.text();
    document.getElementById('root').innerHTML = html;
  renderTogglePassword()
  

  };
  
  document.addEventListener('click', (event) => {
    const href = event.target.getAttribute('href');
    if (event.target.matches('a') && href !== './index.html') {
      route();
    }
  });