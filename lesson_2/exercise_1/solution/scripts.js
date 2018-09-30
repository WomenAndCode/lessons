const body = document.querySelector("body");
const button = document.querySelector("#button");

button.onclick = function() {
  body.classList.toggle('hotpink');
}
