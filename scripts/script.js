import { hour, minute, second, startButton, pauseButton, resetButton, speedButton, spam } from './constants.js';

const speed = Number(prompt(`
    Em qual velocidade você deseja que o timer rode?
    1 = 1 em 1 segundo;
    2 = 0.5 em 0.5 segundos;
`));

if(isNaN(speed) || speed === 0) {
    spam.innerText = `Seu timer está rodando em 1x`;
} else {
    spam.innerText = `Seu timer está rodando em ${speed}x`;
}

spam.classList.add('whatSecond');

startButton.addEventListener('click', () => {
    timerFunction();
})

function timerFunction() {
    let secondText = Number(second.textContent);
    let minuteText = Number(minute.textContent);
    let hourText = Number(hour.textContent);

    const timer = setInterval(startCount, speedTime(speed));

    function startCount() {
        secondText++;
        if(secondText > 59) {
            minuteText++;
            secondText = 0;
            minute.textContent = minuteText;
        }

        if(minuteText > 59) {
            hourText++;
            minuteText = 0;
            hour.textContent = hourText;
        }

        minuteText < 10 ? minute.textContent = `0${minuteText}` : minute.textContent = minuteText;
        hourText < 10 ? hour.textContent = `0${hourText}` : hour.textContent = hourText;
        secondText < 10 ? second.textContent = `0${secondText}` : second.textContent = secondText
    }
    
    function speedTime(value) {
        if(isNaN(value) || value === 0) {
            return 1000;
        } else {
            return 1000 / value; 
        }
    }
    
    pauseButton.addEventListener('click', () => {
        clearInterval(timer);
    })
    
    resetButton.addEventListener('click', () => {
        clearInterval(timer);

        second.textContent = `00`;
        minute.textContent = `00`;
        hour.textContent = `00`;
    })
}

speedButton.addEventListener('click', () => {
    window.location.reload();
})