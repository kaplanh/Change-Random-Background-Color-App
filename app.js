const clickBtn = document.querySelector(".btn-primary");
const mouseOverBtn = document.querySelector(".btn-warning");
const body = document.getElementById("body");
const span = document.getElementById("span");

const bgImageColors = [
  "linear-gradient(to top, red,orange,yellow,green,blue,indigo,violet)",
  "linear-gradient(to bottom, red,orange,yellow,green,blue,indigo,violet)",
  "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
  "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
  "radial-gradient(red, yellow, green)",
  "radial-gradient(red 5%, yellow 15%, green 60%)",
  "linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))",
  "radial-gradient(red 15%, green 40%,yellow 60%)",
  "radial-gradient(circle, red, yellow, green)",
  "radial-gradient(circle, red, yellow, green)",
  "repeating-conic-gradient(red 0deg 10deg, yellow 10deg 20deg, blue 20deg 30deg,pink 30deg 40deg,orange 40deg 50deg,violet 50deg 60deg)",
  "repeating-conic-gradient(red 0deg 10deg, yellow 10deg 20deg, blue 20deg 30deg,pink 30deg 40deg,orange 40deg 50deg,violet 50deg 60deg)",
];

const btnColors = ["yellow", "blue", "green", "red", "pink", "purple"];
// *load islemi gerceklestiginde
window.addEventListener("load", () => {
  body.style.backgroundImage =
    bgImageColors[Math.floor(Math.random() * bgImageColors.length)];
});

//* tiklandiginda

clickBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * btnColors.length);
  body.style.backgroundImage =
    bgImageColors[Math.floor(Math.random() * bgImageColors.length)];
  clickBtn.style.backgroundColor = btnColors[randomNumber];
  span.innerText = `click ${btnColors[randomNumber]}`;
  span.style.color = ` ${btnColors[randomNumber]}`;
});

//* mouse üzerine geldiginde
mouseOverBtn.addEventListener("mouseover", () => {
  let randomNumber = Math.floor(Math.random() * btnColors.length);
  body.style.backgroundImage =
    bgImageColors[Math.floor(Math.random() * bgImageColors.length)];
  mouseOverBtn.style.backgroundColor = btnColors[randomNumber];
  span.innerText = `mouseover ${btnColors[randomNumber]}`;
  span.style.color = ` ${btnColors[randomNumber]}`;
});
