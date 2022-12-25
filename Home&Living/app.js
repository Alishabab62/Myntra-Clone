// ===================== Sale End Timer=================================

const startingTime = 60;
let time = startingTime *60;

const timer = document.querySelector('.timer');

setInterval(timeupdate, 1000);

function timeupdate() {
    const min = Math.floor(time/60);
    let sec = time % 60;

    timer.innerHTML = `${min}: ${sec}`;
    time--;
}