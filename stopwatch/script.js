const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")

const timerEl = document.querySelector(".timer")

let startTime = 0
let elapseTime = 0
let timeInterval


function startTimer(){
    // console.log("Start Timer")
    startTime = Date.now() - elapseTime

    timeInterval = setInterval(()=>{
        elapseTime = Date.now() - startTime
        timerEl.textContent = formatTimer(elapseTime)
    }, 10)

    startEl.disabled = true
    stopEl.disabled = false
}

function formatTimer(elapseTime){
    const milliseconds = Math.floor((elapseTime % 1000)/10)

    const seconds = Math.floor((elapseTime % (1000 * 60))/1000)

    const minutes = Math.floor((elapseTime % (1000 * 60 * 60))/(1000 * 60))

    const hours = Math.floor(elapseTime / (1000 * 60 * 60))

    return (
        (hours ? (hours > 9 ? hours : "0" + hours): "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes): "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds): "00") +
        ":" +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
        )

        
}

function stopTimer(){
    // console.log("Stop Timer")
    clearInterval(timeInterval)


    startEl.disabled = false
    stopEl.disabled = true
}
function resetTimer(){
    // console.log("Reset Timer")
    clearInterval(timeInterval)
    elapseTime = 0

    startEl.disabled = false
    stopEl.disabled = true

    timerEl.textContent = "00:00:00"
}

startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)