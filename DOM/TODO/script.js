const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItems = document.getElementById("todo-items-container");

addBtn.addEventListener("click", () => {
  const value = todoInput.value;

  const li = document.createElement("li");
  li.innerText = value;

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btn);

  if (value) todoItems.appendChild(li);
  todoInput.value = "";
});
