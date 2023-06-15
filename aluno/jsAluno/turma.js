'use strict';

import { getClass } from '../../js/api.js';


const getPeriodo = localStorage.getItem('periodo');

(async function () {
    const turma = await getClass(getPeriodo);

    const makeCardsClass = function (turma) {
        const card = document.createElement('a');
        card.href = '/Atividades/html/index.html';

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cards-turmas');

        const imgClassSemestre = document.createElement('img');
        let semestre = turma.semestre.split("_")[0];

        console.log(semestre);

        localStorage.setItem('class', turma.sigla)
        localStorage.setItem('semestre', turma.semestre)


        console.log(localStorage.getItem('semestre') );
        console.log(localStorage.getItem('class') );


        if (semestre == "1") {
            imgClassSemestre.setAttribute('src', '/image/rodaAzul.png')
        } else if (semestre == "2") {
            imgClassSemestre.setAttribute('src', '/image/rodaVermelho.png')
        } else if (semestre == "3") {
            imgClassSemestre.setAttribute('src', '/image/rodaAmarela.png')
        }else{
            console.log('erro');
        }

        const textClass = document.createElement('p');
        textClass.classList.add('text-sigla');
        textClass.textContent = turma.sigla + semestre;

        cardContainer.append(imgClassSemestre, textClass);
        card.append(cardContainer);

        return card;
    };

    const loadClass = () => {
        const container = document.getElementById('container-class');
        const cards = turma.turmas.map(makeCardsClass);
        container.replaceChildren(...cards);
    };

    loadClass();
})();
