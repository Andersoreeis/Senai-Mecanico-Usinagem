'use strict'

import { getStudentAvaliacao } from '../../js/api.js'

const jsonavaliacoes = await getStudentAvaliacao()

/* <a href="" class="activities">
            <div class="text-activities">
                <i class="fas fa-edit edit-atividade"></i>
                <p class="title-activities">Atividade de integração de peças</p>
            </div>
        </a> */

const criarCardAvaliacao = (alunos) => {
    const card = document.createElement('generation-card')
    card.name = generation.name
    card.region = generation.region
  
    return card
  }

const loadCards = async () => {
    const container = document.getElementById("container")
    const cards = jsonavaliacoes.map(createGenerationCards)
  
    container.replaceChildren(...cards)
  }