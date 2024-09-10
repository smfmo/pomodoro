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
            alert('o tempo acabpu!')
            resetPomodoro()
        }else{
            tempoRestante--
            updateDisplay()
        }
    }, 1000)
}

function resetPomodoro(){
    clearInterval(intervalo)
    isRunning = false
    tempoRestante = pomodoroDuration
    updateDisplay()
}

function updateDisplay(){
    let minutes = Math.floor(tempoRestante/60)
    let seconds = tempoRestante % 60

    minutesDisplay.textContent = minutes.toString().padStart(2, '0')
    secondsDisplay.textContent = seconds.toString().padStart(2, '0')
}

startButton.addEventListener('click', startPomodoro)
startButton.addEventListener('click', resetPomodoro)

