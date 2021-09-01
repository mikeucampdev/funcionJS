


const sumarBoton = document.getElementById('boton-sumar');
const restarBoton = document.getElementById('boton-restar');
const dividirBoton = document.getElementById('boton-dividir');
const multiplicarBoton = document.getElementById('boton-multiplicar');


const input1 = document.getElementById('numero1')
const input2 = document.getElementById('numero2')
const resultadoElement = document.getElementById ('resultado')



function sumar(numero1, numero2) {
   const input1Number = parseInt(num1.value)
   const input2Number = parseInt(num2.value)

   const suma = input1Number + input2Number

    resultadoElement.innerText ='Resultado:' + suma

}


function restar(numero1, numero2) {

    
    

}

function dividir(numero1, numero2) {
    console.log (numero1 -numero2);

}

function multiplicar (numero1, numero2) {
    console.log (numero1 / numero2);

}


/**EVENTOS */

sumarBoton.addEventListener('click', () => sumar (input1,input2))














