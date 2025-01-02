const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function ligarLampada(){
    lampada.src="img/lampada-acesa.png";
}

function desligarLampada(){
    lampada.src="img/lampada-apagada.png";
}

ligar.addEventListener('click',ligarLampada);
desligar.addEventListener('click',desligarLampada)