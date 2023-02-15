const form = document.getElementById("form");
const newItemInput = document.getElementById("new-item-input");
const list = document.getElementById("list");

let items = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = {
    text: newItemInput.value,
    done: false,
  };
  items.push(newItem);
  newItemInput.value = "";
  renderList();
});

function onCheckboxClick(i) {
  items[i].done = !items[i].done;
  renderList();
}

function onDeleteClick(i) {
  items.splice(i, 1);
  renderList();
}

function renderList() {
  list.innerHTML = "";
  items.forEach((item, i) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.addEventListener("click", () => onCheckboxClick(i));
    const text = document.createTextNode(item.text);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", () => onDeleteClick(i));
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

renderList();