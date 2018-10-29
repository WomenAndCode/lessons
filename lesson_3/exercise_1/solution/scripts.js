const button = document.querySelector("#button");
const input = document.querySelector("#input");
const netto = document.querySelector("#netto");

button.onclick = function(e) {
  e.preventDefault();

  const inputValue = input.value;
  let nettoValue;

  if (inputValue <= 11000) {
    nettoValue = inputValue;
  } else {
    const incomeTax = (inputValue - 11000) * 0.365;
    nettoValue = inputValue - incomeTax;
  }

  netto.innerHTML = nettoValue;
};
