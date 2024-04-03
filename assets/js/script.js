// Task 1
const btnAddInput = document.getElementById('btnAddInput');

btnAddInput.addEventListener('click', addNewInput);

function addNewInput() {
    const newInput = document.createElement('input');
    newInput.type = 'text';

    const inputsTask1 = document.getElementById('inputsTask1');
    inputsTask1.appendChild(newInput);
}

// Task 2
const btnDeleteLast = document.getElementById('btnDeleteLast');

btnDeleteLast.addEventListener('click', deleteLastChild);

function deleteLastChild() {
    const lastChild = document.querySelector('#orderedList li:last-child');

    if (lastChild) {
        lastChild.remove();
    }
}

// Task 3
const btnAddItem = document.getElementById('btnAddItem');

btnAddItem.addEventListener('click', addNewListItem);

function addNewListItem() {
    const orderedList = document.getElementById('orderedList');

    const newListItem = document.createElement('li');
    newListItem.textContent = 'item';

    orderedList.appendChild(newListItem);
}
