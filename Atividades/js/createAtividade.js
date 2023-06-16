let optionCounter = 1; // Variável para contar os cards de critério

// Função para criar os inputs de valor dinamicamente
const createInputs = function() {
  const addMoreValueBtn = document.getElementById('add-moreValue');
  const containerInsertValue = document.querySelector('.container-insert-value');

  addMoreValueBtn.addEventListener('click', function() {
    const newInputValue = document.createElement('input');
    newInputValue.setAttribute('type', 'text');
    newInputValue.classList.add('input-value');

    containerInsertValue.appendChild(newInputValue);
  });
};

// Função para criar um novo card de critério
const createCriterio = function() {
  createInputs();
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
    const newInputValue = document.createElement('input');
    newInputValue.setAttribute('type', 'text');
    newInputValue.classList.add('input-value');
    newInputValue.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '');

      if (this.value.length > 3) {
        this.value = this.value.slice(0, 4);
      }
    });

    containerInsertValue.appendChild(newInputValue);
  });

  addInputsValue.append(inputValue, addMoreValueBtn);

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

  containerCriterio.append(inputQuestion, containerInsertValue, textValue, addInputsValue, containerSelectCriterio);

  const containerCriterioWrapper = document.getElementById('container-criterio');
  containerCriterioWrapper.appendChild(containerCriterio);

  optionCounter++;
};

// Event listener para adicionar um novo card de critério ao clicar no botão "Adicionar outro Critério"
const addCriterioBtn = document.getElementById('add-criterio');
addCriterioBtn.addEventListener('click', createCriterio);


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

const submite = document.getElementById('submite');
submite.addEventListener('click', validateForm);

const loadClass = () => {
  const container = document.getElementById('container-criterio');
  const card = createCriterio();
  container.appendChild(card);
};

const btnAdicionarCriterio = document.getElementById('add-criterio');
btnAdicionarCriterio.addEventListener('click', loadClass);
