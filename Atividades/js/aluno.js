import { getStudentsByClassAndRegistration, getStudentsByName } from "../../js/api.js";

const className = localStorage.getItem('class');
const periodoSemestre = localStorage.getItem('semestre');
let studentsByClass = null;
let studentsByName = null;
let searchInput = null;
let clickSearch = null;
let errorElement = null;

const fetchData = async () => {
  studentsByClass = await getStudentsByClassAndRegistration(className, periodoSemestre);
  studentsByName = await getStudentsByName(className, periodoSemestre, 'Mike');
  loadCardsStudents();
};

const handleSearch = () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredStudents = studentsByClass.matricula.filter(
    (aluno) => aluno.aluno.toLowerCase().includes(searchValue)
  );

  loadCardsStudents(filteredStudents);

  if (filteredStudents.length === 0) {
    showError('Nenhum aluno encontrado.');
  } else {
    clearError();
  }
};

const handleIconClick = () => {
  handleSearch();
};

const handleEnterKey = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSearch();
  }
};

const createCardStudents = function (aluno) {
  const students = document.createElement('div');
  students.classList.add('alunos');

  const iconsStudents = document.createElement('i');
  iconsStudents.classList.add('fas', 'fa-user-circle');

  const dataStudents = document.createElement('div');
  dataStudents.classList.add('privacidade');

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = aluno.aluno;

  const email = document.createElement('p');
  email.classList.add('email');
  email.textContent = aluno.email;

  const matricula = document.createElement('p');
  matricula.classList.add('matricula');
  matricula.textContent = aluno.turma;

  students.append(iconsStudents, dataStudents);
  dataStudents.append(name, email, matricula);

  return students;
};

const loadCardsStudents = (filteredStudents = studentsByClass.matricula) => {
  const container = document.getElementById('container-alunos');
  container.innerHTML = '';

  filteredStudents.forEach((aluno) => {
    const card = createCardStudents(aluno);
    container.appendChild(card);
  });
};

const showError = (message) => {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
};

const clearError = () => {
  errorElement.textContent = '';
  errorElement.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  searchInput = document.getElementById('searchStudentsInput');
  searchInput.addEventListener('input', handleSearch);

  clickSearch = document.getElementById('click-search');
  clickSearch.addEventListener('click', handleIconClick);

  document.addEventListener('keydown', handleEnterKey);

  fetchData();

  errorElement = document.createElement('div');
  errorElement.id = 'error-message';
  errorElement.style.display = 'none';
  errorElement.style.position = 'fixed';
  errorElement.style.top = '50%';
  errorElement.style.left = '50%';
  errorElement.style.transform = 'translate(-50%, -50%)';
  errorElement.style.backgroundColor = '#ffcccc';
  errorElement.style.padding = '10px';
  errorElement.style.borderRadius = '4px';
  errorElement.style.textAlign = 'center';
  errorElement.style.fontWeight = 'bold';
  document.body.appendChild(errorElement);
});
