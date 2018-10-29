const button = document.querySelector("#button");
const input = document.querySelector("#input");
const netto = document.querySelector("#netto");

button.onclick = function(e) {
  e.preventDefault();

  const inputValue = input.value;
  let nettoValue;

  if (inputValue <= 11000) {
    nettoValue = inputValue;
  } else if (inputValue <= 25000) {
    const incomeTax = (inputValue - 11000) * 0.365;
    nettoValue = inputValue - incomeTax;
  } else if (inputValue <= 60000) {
    const incomeTax = (inputValue - 25000) * 0.4321 + 5110;
    nettoValue = inputValue - incomeTax;
  } else {
    const incomeTax = (inputValue - 60000) * 0.5 + 20235;
    nettoValue = inputValue - incomeTax;
  }

  netto.innerHTML = nettoValue;
  //netto.innerHTML = parseFloat(nettoValue).toFixed(2);
};
