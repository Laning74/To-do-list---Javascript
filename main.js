let todoContainer = document.getElementById("todo-container");
let todoList = document.getElementById("todo-list");

todoArray = [];

function addToDoList() {
  let inputField = document.getElementById("input-field").value;
  if (inputField === "") {
    alert("Du må skrive inn din neste MÅ gjøre opplevelse!");
  } else {
    todoArray.push({ name: inputField });
    document.getElementById("input-field").value = "";
    listTodo();
  }
}
function listTodo() {
  todoList.innerHTML = "";
  for (let i = 0; i < todoArray.length; i++) {
    todoList.innerHTML += `<li><p>${todoArray[i].name}</p>
    <button id="delete-btn" onclick="deleteToDo(${i})"><i class="fas fa-trash"></i></button></li>`;
  }
}

function deleteToDo(i) {
  let askUser = prompt(
    "Er du sikker på at du vil slette din planlagte opplevelse? Ja/Nei"
  );
  if (askUser == "Ja") {
    todoArray.splice(i, 1);
  } else {
    alert("Ingen opplevelse er slettet!");
  }
  listTodo();
}
