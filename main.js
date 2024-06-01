function hideWarning() {
    document.querySelector('.beta-warning').style.transform = 'translate(0%, -100%)';
}

const pomodoro = document.querySelector('.fullpomo');

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

const pomoDisplay = document.querySelector('.pomodoro-timer');
const pplay = document.getElementById('pplay');
const ppause = document.getElementById('ppause');

let timer;
let tMinutes = 24;
let tSeconds = 59;
let isPaused = true;

function startTimer() {
	timer = setInterval(() => {
		pomoDisplay.innerHTML = tMinutes + ":" + tSeconds;

		tSeconds--;

		if (tSeconds <= -1) {
			tMinutes--;
			tSeconds = 59;
		}

		if (tMinutes <= -1) {
			clearInterval(timer);
			alert("timer ended");
		}
	}, 1000);
}

function pauseTimer() {
    ppause.style.display = "none";
    pplay.style.display = "flex";
	clearInterval(timer);
	isPaused = true;
}

function timerCheck() {
	if (isPaused) {
        ppause.style.display = "flex";
        pplay.style.display = "none";
		startTimer();
		isPaused = false;
	} else {
		console.log("not possible");
	}
}

function askTime() {
	let pMinutes = prompt("Enter a time in minutes", "25");

	if (pMinutes != null) {
		if (!isNaN(pMinutes) && pMinutes > 0) {
			tMinutes = pMinutes;
			tSeconds = 0;
			clearInterval(timer);
			isPaused = true;
			startTimer();
            ppause.style.display = "flex";
            pplay.style.display = "none";
		} else {
			alert("please type a number greater than 0");
			askTime();
		}
	}
}


