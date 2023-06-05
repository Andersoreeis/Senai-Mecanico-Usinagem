const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  export const verificationStundant = async (email, senha) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/alunos?matricula=${email}&senha=${senha}`;
    return fetchData(url);
  };

  export const verificationProfessor = async (email, senha) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/professores?email=${email}&senha=${senha}`;
    return fetchData(url);
  };


