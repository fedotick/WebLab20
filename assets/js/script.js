// Task 1
const btnAddInput = document.getElementById('btnAddInput');

btnAddInput.addEventListener('click', addNewInput);

function addNewInput() {
    const newInput = document.createElement('input');
    newInput.type = 'text';

    const inputsTask1 = document.getElementById('inputsTask1');
    inputsTask1.appendChild(newInput);
}
