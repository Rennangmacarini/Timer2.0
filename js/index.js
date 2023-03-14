import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonStop,
    buttonBigger,
    buttonSmaller,
    minutesDisplay,
    secondsDisplay,
    sonone,
    sontwo,
    sonthree,
    sonfour,
    timerTimeOut
} from './elements.js'


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut
})

const sound = Sound()


buttonPlay.addEventListener("click", function () {
    const minutes = Number(minutesDisplay.textContent)
    if (minutes <= 0) {
        minutesDisplay.textContent = minutes + 25
    }

    timer.countdown()
});

buttonStop.addEventListener("click", function () {
    timer.resetTimer()
})

buttonBigger.addEventListener('click', function () {
    const minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonSmaller.addEventListener('click', function () {
    const minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")

    if (minutesDisplay.textContent < 0) {
        minutesDisplay.textContent = "00"
    }
})


sonone.addEventListener("click", function () {
    sound.buttonForest()
    sonone.classList.add('hide')
    sontwo.classList.remove('hide')
    sonthree.classList.remove('hide')
    sonfour.classList.remove("hide")
})

sontwo.addEventListener("click", function () {
    sound.buttonRain()
    sonone.classList.remove('hide')
    sontwo.classList.add('hide')
    sonthree.classList.remove('hide')
    sonfour.classList.remove("hide")
})

sonthree.addEventListener("click", function () {
    sound.buttonCoffee()
    sonone.classList.remove('hide')
    sontwo.classList.remove('hide')
    sonthree.classList.add('hide')
    sonfour.classList.remove("hide")
})

sonfour.addEventListener("click", function () {
    sound.buttonFire()
    sonone.classList.remove('hide')
    sontwo.classList.remove('hide')
    sonthree.classList.remove('hide')
    sonfour.classList.add("hide")
})
