const button = document.querySelector("#button");
const input = document.querySelector("#input");
const taskList = document.querySelector("#list");

button.onclick = function(e) {
    e.preventDefault();

    const inputValue = input.value;
    const newTask = document.createElement('li');
    newTask.appendChild(document.createTextNode(inputValue));

    taskList.appendChild(newTask);
};

