// Programa Cronometro Digital

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let tempoDecorrido = 0;
let estaRodando = false;

function start(){

    if(!estaRodando){
        startTime = Date.now() - tempoDecorrido;
        timer = setInterval(update, 10);
        estaRodando = true;
    }
}

function stop(){

    if(estaRodando){
        clearInterval(timer);
        tempoDecorrido = Date.now() - startTime;
        estaRodando = false;
    }
}

function reset(){

    clearInterval(timer);
    startTime = 0;
    tempoDecorrido = 0;
    estaRodando = false;
    display.textContent = "00:00:00:00";
}

function update(){

    const tempoAtual = Date.now();
    tempoDecorrido = tempoAtual - startTime;

    let horas = Math.floor(tempoDecorrido / (1000 * 60 * 60));
    let minutos = Math.floor(tempoDecorrido / (1000 * 60) % 60);
    let segundos = Math.floor(tempoDecorrido / 1000 % 60);
    let milisegundos = Math.floor(tempoDecorrido % 1000 / 10);

    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");
    milisegundos = String(milisegundos).padStart(2, "0");

    display.textContent = `${horas}:${minutos}:${segundos}:${milisegundos}`;
}