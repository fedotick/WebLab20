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

// Task 4
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', addNewListItems);

function addNewListItems() {
    const inputString = prompt('Enter elements separated by spaces:');
    
    if (inputString) {
        const unorderedList = document.getElementById('unorderedList');
        
        const items = inputString.split(' ');
        items.forEach(item => {
            if (item) {
                const newListItem = document.createElement('li');
                newListItem.textContent = item;
                
                unorderedList.appendChild(newListItem);
            }
        });
    }
}

// Task 5
const btnAdd1 = document.getElementById('btnAdd1');

btnAdd1.addEventListener('click', addNewParagraphs);

function addNewParagraphs() {
    const inputString = prompt('Enter elements separated by spaces:');
    
    if (inputString) {
        const body = document.querySelector('body');
        const newDiv = document.createElement('div');
        
        const items = inputString.split(' ');
        items.forEach(item => {
            if (item) {
                const newParagraph = document.createElement('p');
                newParagraph.textContent = item;

                newDiv.appendChild(newParagraph);
            }
        });

        body.appendChild(newDiv);
    }
}
