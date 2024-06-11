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