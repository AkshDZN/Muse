const timedisplay = document.querySelector('.time');
const dock = document.querySelector('.dock');

let isExplode = false;

function explode() {
	if (isExplode === false) {
		timedisplay.style.marginTop = "0px";
		timedisplay.style.height = "100vh";
		timedisplay.style.lineHeight = "100vh";
		timedisplay.style.transform = "rotateX(23deg)"
		timedisplay.style.fontSize = "25rem";
		timedisplay.style.color = "rgb(64, 61, 91)";

		dock.style.translate = "0 120px";
		dock.style.scale = "2";
		dock.style.filter = "blur(10px)"

		isExplode = true;
	} else if (isExplode === true) {
		timedisplay.style.marginTop = "40px";
		timedisplay.style.height = "111px";
		timedisplay.style.lineHeight = "111px";
		timedisplay.style.transform = "rotateX(0deg)"
		timedisplay.style.fontSize = "8rem";
		timedisplay.style.color = "rgb(253, 219, 217)";
		

		dock.style.translate = "0 0px";
		dock.style.scale = "1";
		dock.style.filter = "blur(0px)";


		isExplode = false;
	}
}

const pomodoroWindow = document.querySelector('.pomodoro');
let isPomoOpen = false;

function pomodoro() {
	if (isPomoOpen === false) {
		pomodoroWindow.style.scale = "1";
		isPomoOpen = true;
	} else if (isPomoOpen === true) {
		pomodoroWindow.style.scale = "0";
		isPomoOpen = false;
	}
}

const pomoMode1 = document.getElementById('pomoMode1');
const pomoModeText1 = document.getElementById('pomoModeText1');
const pomoMode2 = document.getElementById('pomoMode2');
const pomoModeText2 = document.getElementById('pomoModeText2');
const pomoMode3 = document.getElementById('pomoMode3');
const pomoModeText3 = document.getElementById('pomoModeText3');

pomoMode1.style.backgroundColor = "white";
pomoModeText1.style.color = "black";

function switchPomoMode(mode) {
	if (mode === 1) {
		pomoMode1.style.backgroundColor = "white";
		pomoModeText1.style.color = "black";

		pomoMode2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText2.style.color = "white";

		pomoMode3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText3.style.color = "white";
	} else if (mode === 2) {
		pomoMode2.style.backgroundColor = "white";
		pomoModeText2.style.color = "black";

		pomoMode1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText1.style.color = "white";

		pomoMode3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText3.style.color = "white";
	} else if (mode === 3) {
		pomoMode3.style.backgroundColor = "white";
		pomoModeText3.style.color = "black";

		pomoMode1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText1.style.color = "white";

		pomoMode2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText2.style.color = "white";
	}
}

// time display

setInterval(() => {
    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);

    timeString = timeString.replace(/ (AM|PM)$/, '');

    timedisplay.innerHTML = timeString;
}, 1000);