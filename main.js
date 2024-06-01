function hideWarning() {
    document.querySelector('.beta-warning').style.transform = 'translate(0%, -100%)';
}

let pomodoro = document.querySelector('.fullpomo');

let pomoButtonState = 0;

function pomoShowHide() {
    if (pomoButtonState === 0) {
        pomodoro.style.scale = "1";
        pomoButtonState = 1;
    } else if (pomoButtonState === 1) {
        pomodoro.style.scale = "0";
        pomoButtonState = 0;
    }
}