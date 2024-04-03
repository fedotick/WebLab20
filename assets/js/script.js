// Task 1
const btnAddInput = document.getElementById('btnAddInput');

btnAddInput.addEventListener('click', addNewInputField);

function addNewInputField() {
    const newInput = document.createElement('input');
    newInput.type = 'text';

    const inputsSection = document.getElementById('inputsSection');
    inputsSection.appendChild(newInput);
}

// Task 2
const btnDeleteLast = document.getElementById('btnDeleteLast');

btnDeleteLast.addEventListener('click', deleteLastListItem);

function deleteLastListItem() {
    const lastListItem = document.querySelector('#numberedList li:last-child');

    if (lastListItem) {
        lastListItem.remove();
    }
}

// Task 3
const btnAddItem = document.getElementById('btnAddItem');

btnAddItem.addEventListener('click', addNewItemToList);

function addNewItemToList() {
    const orderedList = document.getElementById('orderedList');

    const newListItem = document.createElement('li');
    newListItem.textContent = 'item';

    orderedList.appendChild(newListItem);
}

// Task 4
const btnAddItemToList = document.getElementById('btnAddItemToList');

btnAddItemToList.addEventListener('click', addItemsToList);

function addItemsToList() {
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
const btnAddDiv = document.getElementById('btnAddDiv');

btnAddDiv.addEventListener('click', addNewDivWithParagraphs);

function addNewDivWithParagraphs() {
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
