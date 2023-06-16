const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  export const verificationStundant = async (email, senha) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/alunos?email=${email}&senha=${senha}`;
    return fetchData(url);
  };

  export const verificationProfessor = async (email, senha) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/professores?email=${email}&senha=${senha}`;
    return fetchData(url);
  };
  
  export const getClass = async (periodo) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/turmas?${periodo}`;
    return fetchData(url);
  };

  export const getStudentsByClassAndRegistration = async (className, registration) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/matriculas?turma=${className}&semestre=${registration}`;
    return fetchData(url);
  };

  export const getStudentsByName = async (className, registration, name) => {
    const url = `https://mecanica-api.cyclic.app/v1/senai/matriculas?turma=${className}&semestre=${registration}&nome=${name}`;
    return fetchData(url);
  };

  export const getStudentAvaliacao = async(numberMatricula) =>{
    const url = `https://mecanica-api.cyclic.app/v1/senai/avaliacoes?matricula=${numberMatricula}`;
    return fetchData(url);
  }

  export const getAvaliacaoById = async(idAvaliacao) =>{
    const url = `https://mecanica-api.cyclic.app/v1/senai/avaliacao/${idAvaliacao}`;
    return fetchData(url);
  }

  console.log(getStudentsByName('ma','3_semestre','Mike '));
  

  






