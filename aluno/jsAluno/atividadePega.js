'use strict'

import { getAvaliacaoById } from '../../js/api.js'

const jsonAvaliacao = await getAvaliacaoById(localStorage.getItem('avaliacaoID'))

/*<div class="container-criterios"> 
<div class="atividade-realizada" id="criteria">
                    <p class="text-red" id="desirable-critical">Critério critico</p>
                    <p class="text-criterion">Critério 1</p>
                </div>
                <div class="container-response" id="response">
                <p class="desejavel" id="score-desirable">Desejado: 140</p>
    
                <input type="text" placeholder="Digite o Resultado" class="result">
    
                <div class="metas" id="goals-achieved">
                    <p>Meta atingida?</p>
                    <form>
                        <label for="option1">
                            <input type="radio" id="option1" name="options" value="option1" class="inputs">
                            Sim
                        </label>
                        <label for="option2">
                            <input type="radio" id="option2" name="options" value="option2" class="inputs">
                            Não
                        </label>
                    </form>
                </div> 
    </div>*/

const criarCardAvaliacao = (criterio) => {
    const card = document.createElement('div')
    card.classList.add('criterio')
    const atividade = document.createElement('div')
    atividade.classList.add('atividade-realizada')
    const critico = document.createElement('p')
    if(criterio.critico){
       critico.classList.add('text-red') 
       critico.textContent = 'Critério critico'
    } else {
        critico.classList.add('text-gray') 
        critico.textContent = 'Critério desejado'
    }
    const descricao = document.createElement('p')
    descricao.classList.add('text-criterion')
    descricao.textContent = criterio.descricao

    card.append(atividade)
    atividade.append(critico, descricao)

    criterio.resultados.forEach(resultado => {
        const resposta = document.createElement('div')
        resposta.classList.add('container-response')

        const objetivo = document.createElement('p')
        objetivo.classList.add('desejavel')
        objetivo.textContent = `Desejado: ${resultado.resultado_desejado}`

        const inputResultado = document.createElement('input')
        inputResultado.classList.add('result')
        inputResultado.type = 'Text'
        inputResultado.placeholder = 'Digite o Resultado'

        const metas = document.createElement('div')
        metas.classList.add('metas')

        const pergunta = document.createElement('p')
        pergunta.textContent = 'Meta atingida?'

        const form = document.createElement('form')
        
        const option1 = document.createElement('label')
        option1.textContent = 'Sim'
        const inputSim = document.createElement('input')
        inputSim.classList.add('inputs')
        inputSim.type = 'radio'
        inputSim.name = 'options'
        inputSim.type = 'option1'

        const option2 = document.createElement('label')
        option2.textContent = 'Não'
        const inputNao = document.createElement('input')
        inputSim.classList.add('inputs')
        inputSim.type = 'radio'
        inputSim.name = 'options'
        inputSim.type = 'option2'

        resposta.append(objetivo, inputResultado, metas)
        metas.append(pergunta, form)
        form.append(option1, option2)
        option1.append(inputSim)
        option2.append(inputNao)

        card.appendChild(resposta)
    });
  
    return card
  }

const loadCards = async () => {
    const title = document.getElementById('name-activity')
    title.textContent = jsonAvaliacao.avaliacao.nome
    const alunoName = document.getElementById('name-student')
    alunoName.textContent = localStorage.getItem('nomeAluno')

    const container = document.getElementById("container-criterios")
    const cards = jsonAvaliacao.avaliacao.criterios.map(criarCardAvaliacao)

    container.replaceChildren(...cards)
}

loadCards()