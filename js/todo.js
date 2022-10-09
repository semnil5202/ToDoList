let todosArr = [];
const todosForm = document.querySelector(".todos-form");
const todosInput = document.querySelector(".todos-input");
const todosList = document.querySelector(".todos-list");
const getTodos = localStorage.getItem("todos");

function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todosArr));
}

function deleteTodos(e) {
  const targetLi = e.target.parentElement;
  targetLi.remove();

  todosArr = todosArr.filter((item) => item.id !== Number(targetLi.id));
  saveTodosToLocalStorage();
}

function renderTodos(todos) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.addEventListener("click", deleteTodos);

  li.id = todos.id;
  div.className = "todos-item";
  div.innerText = todos.todo;
  li.appendChild(div);
  todosList.appendChild(li);
}

function todosFormSubmit(e) {
  e.preventDefault();
  const newTodoObj = {
    id: Date.now(),
    todo: todosInput.value,
  };
  if (todosArr.length < 6 && todosInput.value.length > 0) {
    todosArr.push(newTodoObj);
    renderTodos(newTodoObj);
  }
  todosInput.value = "";
  saveTodosToLocalStorage();
}

todosForm.addEventListener("submit", todosFormSubmit);

if (getTodos !== null) {
  const parseGetTodos = JSON.parse(getTodos);
  todosArr = parseGetTodos;
  parseGetTodos.forEach((i) => renderTodos(i));
}
