const btn = document.getElementById("btn");
const todo = document.getElementById("inputField");
const todos = document.getElementById("todos");
const todosAmount = document.getElementById("amount");

btn.addEventListener("click", () => {
  createAndRemoveToDo();
});

function createAndRemoveToDo() {
  //Todo Create
  const newP = document.createElement("p");
  newP.classList.add("todoParagraph");
  newP.innerText = todo.value;
  todos.appendChild(newP);
  todo.value = "";
  //Todo Remove
  newP.addEventListener("click", () => {
    newP.remove();
  });
}
