var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandom = document.querySelector(".random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColors() {
	var randomColor1 = '#' + parseInt(Math.random() * 0xffffff).toString(16);
	var randomColor2 = '#' + parseInt(Math.random() * 0xffffff).toString(16);
	body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";

	color1.value = randomColor1;
	color2.value = randomColor2;

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonRandom.addEventListener("click", randomColors);