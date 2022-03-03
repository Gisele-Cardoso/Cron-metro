const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




const meuAniversario = '3 Jun 2022';

function countdown(){
    const meuAniversarioDate = new Date(meuAniversario);
    const currentDate = new Date();

    const totalSeconds = (meuAniversarioDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTtime(hours);
    minsEl.innerHTML = formatTtime(mins);
    secondsEl.innerHTML = formatTtime(seconds);


}

function formatTtime(time){
    return time < 10 ? `0${time}` : time;
}


//initial
countdown();

setInterval(countdown, 1000);