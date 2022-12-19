import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, IMC } from './util.js';

const form = document.querySelector('form');
const inputWeigth = document.querySelector('#weigth');
const inputHeight = document.querySelector('#height');

form.onsubmit = (evento) => {
    evento.preventDefault();
    const weigth = inputWeigth.value;
    const height = inputHeight.value;

    const showAlertError = notANumber(weigth) || notANumber(height)
    if (showAlertError) {
        AlertError.open()
        return
    }
    AlertError.close();

    const result = IMC(weigth, height);
    const message = `Seu imc é ${result}`
    Modal.message.innerText = message;
    Modal.open()
    inputWeigth.value = '';
    inputHeight.value = '';
}


Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(evento) {
    if (evento.key == 'Escape') {
        Modal.close()
    }
}

inputHeight.oninput = () => AlertError.close()
inputWeigth.oninput = () => AlertError.close()