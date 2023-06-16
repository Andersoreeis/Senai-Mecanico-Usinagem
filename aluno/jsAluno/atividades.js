'use strict'

import { getStudentAvaliacao } from '../../js/api.js'

const jsonavaliacoes = await getStudentAvaliacao('11567891')

const criarCardAvaliacao = (avaliacao) => {
    const card = document.createElement('a')
    card.classList.add('activities')
    card.href = '../html/atividadePega.html'
    const textActivities = document.createElement('div')
    textActivities.classList.add('text-activities')
    const aFazer = document.createElement('i')
    aFazer.classList.add('fas')
    aFazer.classList.add('fa-edit')
    aFazer.classList.add('edit-atividade')
    const title = document.createElement('p')
    title.classList.add('title-activities')
    title.textContent = avaliacao.avaliacao_nova

    card.append(textActivities)
    textActivities.append(aFazer, title)
  
    return card
  }

const loadCards = () => {
    const container = document.getElementById("container")
    const cards = jsonavaliacoes.avaliacaoDisponivel.map(criarCardAvaliacao)

    console.log(cards);

    container.replaceChildren(...cards)
  }

loadCards()