const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonBigger = document.querySelector(".bigger")
const buttonSmaller = document.querySelector(".smaller")
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const sonone = document.querySelector("#sonOne")
const sontwo = document.querySelector("#sonTwo")
const sonthree = document.querySelector("#sonThree")
const sonfour = document.querySelector("#sonFour")

let timerTimeOut


export {
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
}