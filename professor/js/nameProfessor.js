window.addEventListener('DOMContentLoaded', function() {
    const nomeProfessor = localStorage.getItem('nomeProfessor');
    const spanNomeProfessor = document.getElementById('nome-professor');
    if (nomeProfessor && spanNomeProfessor) {
        const primeiroNome = nomeProfessor.split(' ')[0];
        spanNomeProfessor.textContent = `Olá, ${primeiroNome}`;
    }

    StoragingPeriod();
});

const StoragingPeriod = function() {
    const periodomanha = document.getElementById('p-manha');
    const periodotarde = document.getElementById('p-tarde');

    const cardManha = document.getElementById('card-manha');
    const cardTarde = document.getElementById('card-tarde');

    if (cardManha) {
        cardManha.addEventListener('click', function() {
            if (periodomanha.textContent === 'Manhã') {
                localStorage.setItem('periodo', periodomanha.textContent);
                const periodoGetskldf = localStorage.getItem('periodo')
                console.log(periodoGetskldf);
            }else{
                console.log('erro')
            }
        });
    }

    if (cardTarde) {
        cardTarde.addEventListener('click', function() {
            if (periodotarde.textContent === 'Tarde') {
                localStorage.setItem('periodo', periodotarde.textContent);
                const periodoGetskldf = localStorage.getItem('periodo')
                console.log(periodoGetskldf);
            }else{
                console.log('erro')
            }
        });
    }
};
