const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const selectAllButton = document.querySelector('[name="select"]');
const clearAllButton = document.querySelector('[name="clear"]');

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
}

function selectCheckboxes() {
    const checkboxes = itemsList.querySelectorAll('input');

    checkboxes.forEach(checkbox => checkbox.checked = true);
    items.forEach(item => item.done = true);
    localStorage.setItem('items', JSON.stringify(items));
}

selectAllButton.addEventListener('click', selectCheckboxes);

function clearCheckboxes() {
    const checkboxes = itemsList.querySelectorAll('input');

    checkboxes.forEach(checkbox => checkbox.checked = false);
    items.forEach(item =>item.done = false);
    localStorage.setItem('items', JSON.stringify(items));
}

clearAllButton.addEventListener('click', clearCheckboxes);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList); 