const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  export const verification = async (matricula, senha) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/alunos?matricula=${matricula}&senha=${senha}`;
    return fetchData(url);
  };
console.log(verification('1157661', 'claudio1234'));