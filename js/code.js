 export function renderInputCode() {
     const inputCodes1 = document.getElementById('input-code1')
     const inputCodes2 = document.getElementById('input-code2')
     const inputCodes3 = document.getElementById('input-code3')
     const inputCodes4 = document.getElementById('input-code4')

     const arrayInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

     inputCodes1.addEventListener('input', function () {
         if (this.value.length > 1) {
             this.value = this.value.slice(0, 1);
         }
     });

     inputCodes1.addEventListener('keyup', function (e) {
         if (arrayInputs.includes(e.key)) {
             inputCodes1.blur()
             inputCodes2.focus()
         }
     })

     inputCodes2.addEventListener('input', function () {
         if (this.value.length > 1) {
             this.value = this.value.slice(0, 1);
         }
     });

     inputCodes2.addEventListener('keyup', function (e) {
         if (arrayInputs.includes(e.key)) {
             inputCodes2.blur()
             inputCodes3.focus()
         }


     })

     inputCodes3.addEventListener('input', function () {
         if (this.value.length > 1) {
             this.value = this.value.slice(0, 1);
         }
     });

     inputCodes3.addEventListener('keyup', function (e) {
         if (arrayInputs.includes(e.key)) {
             inputCodes3.blur()
             inputCodes4.focus()
         }


     })

     inputCodes4.addEventListener('input', function () {
         if (this.value.length > 1) {
             this.value = this.value.slice(0, 1);
         }
     });

     inputCodes4.addEventListener('keyup', function (e) {
         if (arrayInputs.includes(e.key)) {
             inputCodes4.blur()
         }


     })
 }