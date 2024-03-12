const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const tens = document.querySelector('#tens');

const buttonStart = document.querySelector('#button-start');
const buttonStop = document.querySelector('#button-stop');
const buttonReset = document.querySelector('#button-reset');

let interval;
let tensCounter = 0;
let secondsCounter = 0;
let minutesCounter = 0;

buttonStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    tensCounter = 0;
    secondsCounter = 0;
    minutesCounter = 0;

    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    tens.innerHTML = '00';
});

function startTimer() {
    tensCounter++;
    tens.innerHTML = (tensCounter < 10) ? '0' + tensCounter : tensCounter;

    if (tensCounter === 99) {
        tensCounter = 0;
        secondsCounter++;

        seconds.innerHTML = (secondsCounter < 10) ? '0' + secondsCounter : secondsCounter;

        if (secondsCounter === 59) {
            secondsCounter = 0;
            minutesCounter++;

            minutes.innerHTML = (minutesCounter < 10) ? '0' + minutesCounter : minutesCounter;
        }
    }
}

