const body = document.querySelector("body");
const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.onclick = function() {
  const inputValue = input.value;
  
  alert(inputValue);
}
