// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
    // Prevent form from submitting
  event.preventDefault();
  console.log("hello");
}

/*
- .addEventListener("click", someFunc); // more than click
- event.preventDefault();
*/
