const timedisplay = document.querySelector('.time');

let isExplode = false;

function explode() {
	if (isExplode === false) {
		timedisplay.style.marginTop = "0px";
		timedisplay.style.height = "100vh";
		timedisplay.style.lineHeight = "100vh";
		timedisplay.style.transform = "rotateX(23deg)"
		timedisplay.style.fontSize = "25rem";

		isExplode = true;
	} else if (isExplode === true) {
		timedisplay.style.marginTop = "40px";
		timedisplay.style.height = "111px";
		timedisplay.style.lineHeight = "111px";
		timedisplay.style.transform = "rotateX(0deg)"
		timedisplay.style.fontSize = "8rem";

		isExplode = false;
	}
}