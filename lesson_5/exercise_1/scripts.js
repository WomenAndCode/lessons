const daysSpan = document.querySelector('.days');
const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');

const deadline = 'December 24 2018';

function getRemainingTime(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    function updateClock() {
        const time = getRemainingTime(endtime);

        daysSpan.innerHTML = time.days;
        hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);

        if (time.total <= 0) {
            clearInterval(updateInterval);
        }
    }

    updateClock();
    const updateInterval = setInterval(updateClock, 1000);
}

initializeClock(deadline);