const btnCreateCriterio = document.getElementById('btn-create-criterio')
const botoes = document.getElementsByClassName('btn-create-criterio')



const createCriterio = function(){
const question = document.createElement('div')
question.classList.add('question')

const inputYourQuestion = document.createElement('input')
inputYourQuestion.classList.add('your-question')
inputYourQuestion.setAttribute('type','text', 'placeholder', 'Insira o critério')

const number = document.createElement('p')
number.classList.add('value')

const inputNumber = document.createElement('input')
inputNumber.classList.add('value-desirable')
inputNumber.setAttribute('type','number')

const createValue = document.createElement('div')
createValue.classList.add('circulo2')


const btnExigencia = document.getElementById('button')

const iconMore = document.createElement('i')
iconMore.classList.add('fas', 'fa-plus fa s-m')


const formulario = document.createElement('form')
const inputRadio1 = document.createElement('input')
inputRadio1.setAttribute('type','radio','name', 'opcoes', 'value', 'opcao1')

const inputRadio2 = document.createElement('input')
inputRadio2.setAttribute('type','radio','name', 'opcoes', 'value', 'opcao1')

const labelOpcao1 = document.createElement('label')
labelOpcao2.classList.add('input3')
labelOpcao1.setAttribute('for', 'opcao2')
labelOpcao2.setAttribute('for', 'opcao2')


inputRadio1.setAttribute('type','radio','name', 'opcoes2', 'value', 'opcao2')

const labelOpcao2 = document.createElement('label')
labelOpcao2.classList.add('input3')



question.append(inputYourQuestion, number,inputNumber, createValue, formulario)
formulario.append(inputRadio1,labelOpcao1, inputRadio2, labelOpcao2)
createValue.append(btnExigencia)


return question






}



const loadClass = () => {
    const container = document.getElementById('container-atividades');
    const cards = createCriterio()
    container.replaceChildren(...cards);
};

loadClass();