let optionCounter = 1; // Variável para contar os cards de critério


const botao = document.getElementById('add-moreValue')

botao.addEventListener('click', function() {
  createInputs(document.getElementById('inputValue'));
})
const inputValue = document.getElementById('inputValue')

inputValue.addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, '');

  if (this.value.length > 3) {
    this.value = this.value.slice(0, 4);
  }
});

// Função para criar os inputs de valor dinamicamente
const createInputs = function(containerInsertValue) {
  const newInputValue = document.createElement('input');
  newInputValue.setAttribute('type', 'text');
  newInputValue.classList.add('input-value');
  containerInsertValue.appendChild(newInputValue);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', function() {
    containerInsertValue.removeChild(newInputValue);
    containerInsertValue.removeChild(deleteBtn);
  });
  containerInsertValue.appendChild(deleteBtn);
};

// Função para criar um novo card de critério
const createCriterio = function() {
  const containerCriterio = document.createElement('div');
  containerCriterio.classList.add('container-criterio');

  const inputQuestion = document.createElement('input');
  inputQuestion.setAttribute('type', 'text');
  inputQuestion.setAttribute('placeholder', 'Insira a pergunta');
  inputQuestion.classList.add('insert-question');

  const containerInsertValue = document.createElement('div');
  containerInsertValue.classList.add('container-insert-value');

  const textValue = document.createElement('p');
  textValue.classList.add('text-value');
  textValue.textContent = 'Insira o valor desejado';

  const addInputsValue = document.createElement('div');
  addInputsValue.classList.add('add-inputs-value');

  const inputValue = document.createElement('input');
  inputValue.setAttribute('type', 'text');
  inputValue.classList.add('input-value');
  inputValue.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 3) {
      this.value = this.value.slice(0, 4);
    }
  });

  const addMoreValueBtn = document.createElement('p');
  addMoreValueBtn.classList.add('btn-more');
  addMoreValueBtn.textContent = '+';
  addMoreValueBtn.addEventListener('click', function() {
    createInputs(addInputsValue);
  });

  addInputsValue.append(addMoreValueBtn, inputValue);

  const containerSelectCriterio = document.createElement('div');
  containerSelectCriterio.classList.add('container-select-yes-or-no-criterio');

  const form = document.createElement('form');

  const labelOption1 = document.createElement('label');
  labelOption1.setAttribute('for', `option1-${optionCounter}`);

  const inputOption1 = document.createElement('input');
  inputOption1.setAttribute('type', 'radio');
  inputOption1.setAttribute('id', `option1-${optionCounter}`);
  inputOption1.setAttribute('name', `options${optionCounter}`); // Nome do input de rádio único para cada card
  inputOption1.setAttribute('value', 'option1');
  inputOption1.classList.add('inputs');

  labelOption1.append(inputOption1, 'Critério Crítico');

  const labelOption2 = document.createElement('label');
  labelOption2.setAttribute('for', `option2-${optionCounter}`);

  const inputOption2 = document.createElement('input');
  inputOption2.setAttribute('type', 'radio');
  inputOption2.setAttribute('id', `option2-${optionCounter}`);
  inputOption2.setAttribute('name', `options${optionCounter}`); // Nome do input de rádio único para cada card
  inputOption2.setAttribute('value', 'option2');
  inputOption2.classList.add('inputs');

  labelOption2.append(inputOption2, 'Critério Desejado');

  form.append(labelOption1, labelOption2);

  containerSelectCriterio.appendChild(form);

  containerCriterio.append(
    inputQuestion,
    containerInsertValue,
    textValue,
    addInputsValue,
    containerSelectCriterio
  );

  optionCounter++;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', function() {
    containerCriterio.parentNode.removeChild(containerCriterio);
  });
  containerCriterio.appendChild(deleteBtn);

  return containerCriterio; // Retorna o card criado
};

const validateForm = () => {
  const inputNomeProjeto = document.querySelector('.input-text-nome-projeto');
  const inputQuestions = document.querySelectorAll('.insert-question');
  const inputValues = document.querySelectorAll('.input-value');
  let valid = true;

  if (inputNomeProjeto.value.trim() === '') {
    inputNomeProjeto.style.borderColor = 'red';
    valid = false;
  } else {
    inputNomeProjeto.style.borderColor = '';
  }

  inputQuestions.forEach(inputQuestion => {
    if (inputQuestion.value.trim() === '') {
      inputQuestion.style.borderColor = 'red';
      valid = false;
    } else {
      inputQuestion.style.borderColor = '';
    }
  });

  inputValues.forEach(inputValue => {
    if (inputValue.value.trim() === '') {
      inputValue.style.borderColor = 'red';
      valid = false;
    } else {
      inputValue.style.borderColor = '';
    }
  });

  if (!valid) {
    alert('Por favor, preencha todos os campos corretamente.');
  } else {
    alert('Formulário enviado com sucesso!');
  }
};

const loadClass = () => {
  const container = document.getElementById('container-criterio');
  const card = createCriterio();
  container.appendChild(card);
};

const btnAdicionarCriterio = document.getElementById('add-criterio');
btnAdicionarCriterio.addEventListener('click', loadClass);

const submite = document.getElementById('submite');
submite.addEventListener('click', validateForm);
