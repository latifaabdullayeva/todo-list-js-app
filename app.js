// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheckTodo);

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  // Create Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Todo LI
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  // Grab the value of todo-input
  newTodo.innerText = todoInput.value;
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
        <li class="todo-item"></li>
        <button class="check-btn">
          <i class="fas fa-check"></i>
        </button>
        <button class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
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

function deleteCheckTodo(event) {
  const item = event.target;
  // DELETE todo block (div)
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // Adds animation when todo is deleted
    todo.classList.add("fall");
    // It will end untill transition is finished and then remove the item
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  // CHECK click on check to mark  todo as completed
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("item-checked");
  }
}

/*
- .addEventListener("click", someFunc); // more than click
- event.preventDefault();
- item.parentElement;
- item.remove();
- classList.toggle VS classList.add
- transitionend event
*/
