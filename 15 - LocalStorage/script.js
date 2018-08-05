const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
  event.preventDefault();
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

function populateList(items = [], itemsList) {
  itemsList.innerHTML = items.map((item, i) => {
    return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />                
            <label for="item${i}">${item.text}</label>
            </li>
        `;
  }).join('');
}

function toggleDone(event) {
  if (!event.target.matches('input')) return; // skip unless it's an input
  const el = event.target;
  const index = el.dataset.index;
  console.log(index);
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);