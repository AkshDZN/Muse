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

// music player trigger

const musicPlayer = document.querySelector('.music');

let isMusicOpen = false;

function music() {
	if (isMusicOpen === false) {
		musicPlayer.style.scale = 1;
		isMusicOpen = true;
	} else if (isMusicOpen === true) {
		musicPlayer.style.scale = 0;
		isMusicOpen = false;
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


// pomodoro code 
let isTimerRunning = false;
let timer;
const pomoButton = document.querySelector('.pomo-play');

let pminutes = 24;
let pseconds = 60;

const alarmSound = new Audio('sounds/alarm.mp3');

function stopTimer() {
	clearInterval(timer);
	pminutes = 24;
	pseconds = 60;
	pomoButton.src = "assets/play.svg";
	document.querySelector('.pomo-timer').innerHTML = "25:00";
	isTimerRunning = false;
	alarmSound.play();
}

function startTimer() {
	if (isTimerRunning === false) {
		isTimerRunning = true;
		pomoButton.src = "assets/pause.svg";

		timer = setInterval(() => {
			pseconds--;

			if (pseconds < 1) {
				pseconds = 59;
				pminutes--;
			}

			document.querySelector('.pomo-timer').innerHTML = pminutes + ":" + pseconds;
			

			if (pminutes < 0) {
				stopTimer();
			}

		}, 1000);
	} else if (isTimerRunning === true) {
		clearInterval(timer);
		isTimerRunning = false;
		pomoButton.src = "assets/play.svg";
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

		clearInterval(timer);
		pminutes = 24;
		pseconds = 60;
		document.querySelector('.pomo-timer').innerHTML = "25:00";
		isTimerRunning = false;
		pomoButton.src = "assets/play.svg";

	} else if (mode === 2) {
		pomoMode2.style.backgroundColor = "white";
		pomoModeText2.style.color = "black";

		pomoMode1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText1.style.color = "white";

		pomoMode3.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText3.style.color = "white";

		clearInterval(timer);
		pminutes = 4;
		pseconds = 60;
		document.querySelector('.pomo-timer').innerHTML = "5:00";
		isTimerRunning = false;
		pomoButton.src = "assets/play.svg";

	} else if (mode === 3) {
		pomoMode3.style.backgroundColor = "white";
		pomoModeText3.style.color = "black";

		pomoMode1.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText1.style.color = "white";

		pomoMode2.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		pomoModeText2.style.color = "white";

		clearInterval(timer);
		pminutes = 9;
		pseconds = 60;
		document.querySelector('.pomo-timer').innerHTML = "10:00";
		isTimerRunning = false;
		pomoButton.src = "assets/play.svg";

	}
}

// Music Link

const LinkField = document.querySelector(".linkbar-text");
const videoPlayer = document.querySelector('.vid-frame');

function minifyLink(ytlink) {
	let link = ytlink;
	const removeWordsBefore = '<iframe width="560" height="315" src="';
	const removeWordsAfter = '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
	let phase1 = link.replace(removeWordsBefore, "");
	let phase2 = phase1.replace(removeWordsAfter, "");
	videoPlayer.src = phase2;
}

LinkField.addEventListener("keyup", ({key}) => {
	if (key === "Enter") {
		const inputValue = LinkField.value.trim();

		if (inputValue === "") {
			alert("Please give a valid YouTube Link");
		} else {
			minifyLink(LinkField.value);
		}

	}
})
