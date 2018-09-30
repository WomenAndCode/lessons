const body = document.querySelector("body");
const button = document.querySelector("#button");
const input = document.querySelector("#input");
const netto = document.querySelector("#netto");

button.onclick = function(e) {
  e.preventDefault();

  const inputValue = input.value;
  let nettoValue;

  if(inputValue <= 916.7) {
    nettoValue = inputValue;
  } else if (inputValue <= 2084) {
    const incomeTax = (inputValue - 916.7) * 0.365;
    nettoValue = inputValue - incomeTax;
  } else if (inputValue <= 5000) {
    const incomeTax = (inputValue - 2084) * 0.4321 + 426;
    nettoValue = inputValue - incomeTax;
  } else {
    const incomeTax = (inputValue - 5000) * 0.5 + 1686;
    nettoValue = inputValue - incomeTax;
  }

  netto.innerHTML = parseFloat(nettoValue).toFixed(2);
}
