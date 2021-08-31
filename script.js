setInterval(time, 1000);
const hourEl = document.querySelector("[data-hour]");
const minEl = document.querySelector("[data-min]");
const secEl = document.querySelector("[data-sec]");
function time() {
  const date = new Date();
  const sec = date.getSeconds() / 60;
  const min = (sec + date.getMinutes()) / 60;
  const hour = (min + date.getHours()) / 12;

  setRotation(secEl, sec);
  setRotation(minEl, min);
  setRotation(hourEl, hour);
}
time();

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotate", rotationRatio * 360);
}
