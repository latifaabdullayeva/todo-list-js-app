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
  // Create Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Todo LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  // To stick LI inside DIV that we have created
  todoDiv.appendChild(newTodo);
  // Create Delete Button
  // Create Checked Button

  /* Should look like this:
  <div class="todo-container">
    <ul class="todo-list">
      <div class="todo">
        <li class="item"></li>
        <button>Delete</button>
        <button>Checked</button>
      </div>
      <div class="todo">
        <li></li>
        <button>Delete</button>
        <button>Checked</button>
      </div>
      ...
    </ul>
  </div>;
  */
}

/*
- .addEventListener("click", someFunc); // more than click
- event.preventDefault();
*/
