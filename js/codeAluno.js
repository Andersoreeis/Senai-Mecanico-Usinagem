import {
    navigateToPage
} from './rounter.js'
export function renderInputCodeAluno() {
    const inputCodes1Aluno = document.getElementById('input-code1-aluno');
    const inputCodes2Aluno = document.getElementById('input-code2-aluno');
    const inputCodes3Aluno = document.getElementById('input-code3-aluno');
    const inputCodes4Aluno = document.getElementById('input-code4-aluno');

    const arrayInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    inputCodes1Aluno.addEventListener('input', function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    inputCodes1Aluno.addEventListener('keyup', function (e) {
        if (arrayInputs.includes(e.key)) {
            inputCodes1Aluno.blur();
            inputCodes2Aluno.focus();
        }
    });

    inputCodes2Aluno.addEventListener('input', function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    inputCodes2Aluno.addEventListener('keyup', function (e) {
        if (arrayInputs.includes(e.key)) {
            inputCodes2Aluno.blur();
            inputCodes3Aluno.focus();
        }
    });

    inputCodes3Aluno.addEventListener('input', function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    inputCodes3Aluno.addEventListener('keyup', function (e) {
        if (arrayInputs.includes(e.key)) {
            inputCodes3Aluno.blur();
            inputCodes4Aluno.focus();
        }
    });

    inputCodes4Aluno.addEventListener('input', function () {
        if (this.value.length > 1) {
            this.value = this.value.slice(0, 1);
        }
    });

    inputCodes4Aluno.addEventListener('keyup', function (e) {
        if (arrayInputs.includes(e.key)) {
            if (checkCodeMatch()) {
                navigateToPage('/changeAluno');
                resetInputErrors();
            } else {
                inputCodes4Aluno.blur();
                setInputErrors();
            }
        }
    });

    const inputs = [inputCodes1Aluno, inputCodes2Aluno, inputCodes3Aluno, inputCodes4Aluno];

    inputs.forEach(function (input) {
        input.addEventListener('click', function () {
            this.select();
            resetInputErrors();
        });
    });

    function checkCodeMatch() {
        const enteredCode = inputCodes1Aluno.value + inputCodes2Aluno.value + inputCodes3Aluno.value + inputCodes4Aluno.value;
        const apiCode = GetCodeApi();

        return enteredCode === apiCode;
    }

    function GetCodeApi() {
        return "1234";
    }

    function resetInputErrors() {
        inputs.forEach(function (input) {
            input.classList.remove('error-inputs');
        });
    }

    function setInputErrors() {
        inputs.forEach(function (input) {
            input.classList.add('error-inputs');
        });
    }
}

  