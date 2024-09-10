let minutesDisplay = document.getElementById('minutos')
let secondsDisplay = document.getElementById('segundos')
let startButton = document.getElementById('start')
let resetButton = document.getElementById('reset')

let pomodoro = 25 * 60 //25 minutos vezes 60 segundos
let tempoRestante = pomodoroDuration
let isRunning = false
let intervalo 

function startPomodoro (){
    if(isRunning) return
    isRunning = true

    intervalo = setIntervalo(() =>{
        if(tempoRestante >= 0){
            clearInterval(intervalo)
        }
    }
}

