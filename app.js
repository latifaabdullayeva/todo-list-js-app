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
  // Create Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Todo LI
  const newTodo = document.createElement("li");
  // Grab the value of todo-input
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  // To stick LI inside DIV that we have created
  todoDiv.appendChild(newTodo);
  // Create Checked Button
  const checkedTodoBtn = document.createElement("button");
  checkedTodoBtn.classList.add("check-btn");
  checkedTodoBtn.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(checkedTodoBtn);
  // Create Delete Button
  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.classList.add("delete-btn");
  // deleteTodoBtn.createElement('<i class="fas fa-trash"></i>'); or as alternative:
  deleteTodoBtn.innerHTML = '<i class="fas fa-trash"></i>';
  // append check button to the DIV
  todoDiv.appendChild(deleteTodoBtn);
  // Append to UL Todo-List
  todoList.appendChild(todoDiv);
  // Clear todo-input value
  todoInput.value = "";

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
