const body = document.querySelector("body");
const button = document.querySelector("#button");
const input = document.querySelector("#input");
const netto = document.querySelector("#netto");

button.onclick = function(e) {
  e.preventDefault();

  const inputValue = input.value;
  const nettoValue = inputValue * 0.8;

  netto.innerHTML = nettoValue;
}
