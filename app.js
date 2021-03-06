// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Attach event listeners to a Window for local storage
document.addEventListener("DOMContentLoaded", getTodos);
// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", actionOnTodo);
filterOption.addEventListener("change", filterTodo);

// Save todos in the local storage of browser
let localTodos;
let localChecked;

function createTodoDIV(newTodoVal) {
  // Create Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // If localChecked exists and there are marked items, cross item over
  if (
    localStorage.localChecked &&
    localStorage.localChecked.includes(newTodoVal)
  ) {
    todoDiv.classList.toggle("item-checked");
  }

  // Create Todo LI
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  // Grab the value of todo-input
  newTodo.innerText = newTodoVal;
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
}

function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  createTodoDIV(todoInput.value);
  // Save todo to local storage
  saveLocalTodos(todoInput.value);
  // Clear todo-input value
  todoInput.value = "";
}

function actionOnTodo(event) {
  const item = event.target;
  deleteTodo(item);
  markTodo(item);
}

function deleteTodo(triggeredItem) {
  // DELETE todo block (div)
  if (triggeredItem.classList[0] === "delete-btn") {
    const todo = triggeredItem.parentElement;
    // Adds animation when todo is deleted
    todo.classList.add("fall");
    removeLocalTodos(todo);
    // It will end untill transition is finished and then remove the triggeredItem
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
}

function markTodo(triggeredItem) {
  // MARK todo as completed
  if (triggeredItem.classList[0] === "check-btn") {
    const todo = triggeredItem.parentElement;
    todo.classList.toggle("item-checked");
    saveLocalMarkedTodos(todo.childNodes[0].innerText);
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("item-checked")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("item-checked")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      default:
        todo.style.display = "flex";
    }
  });
}

function checkLocalTodo() {
  // CHECK if my local todo storage is empty
  if (localStorage.getItem("localTodos") === null) {
    localTodos = [];
  } else {
    localTodos = JSON.parse(localStorage.getItem("localTodos"));
  }
}

function saveLocalTodos(todo) {
  checkLocalTodo();
  localTodos.push(todo);
  localStorage.setItem("localTodos", JSON.stringify(localTodos));
}

function checkLocalMarkedTodos() {
  // CHECK if my local Marked todo storage is empty
  if (localStorage.getItem("localChecked") === null) {
    localChecked = [];
  } else {
    localChecked = JSON.parse(localStorage.getItem("localChecked"));
  }
}

function saveLocalMarkedTodos(markedTodo) {
  checkLocalMarkedTodos();
  todoList.childNodes.forEach(function (todo) {
    if (
      todo.classList.contains("item-checked") &&
      !localChecked.includes(markedTodo) &&
      markedTodo
    ) {
      localChecked.push(markedTodo);
      localStorage.setItem("localChecked", JSON.stringify(localChecked));
    }
    if (
      !todo.classList.contains("item-checked") &&
      todo.children[0].innerText === markedTodo
    ) {
      const index = localChecked.indexOf(markedTodo);
      localChecked.splice(index, 1);
      localStorage.setItem("localChecked", JSON.stringify(localChecked));
      // After removing element from todos, nothing is marked anymore
      markedTodo = "";
    }
  });
}

function getTodos() {
  checkLocalTodo();
  localTodos.forEach(function (todo) {
    createTodoDIV(todo);
  });
}

function removeLocalTodos(todo) {
  checkLocalTodo();
  const todoIndex = localTodos.indexOf(todo.children[0].innerText);
  localTodos.splice(todoIndex, 1);
  localStorage.setItem("localTodos", JSON.stringify(localTodos));
}

/*
- .addEventListener("click", someFunc); // more than click
- event.preventDefault();
- item.parentElement;
- item.remove();
- classList.toggle VS classList.add
- transitionend event
- splice()

- CHANGE:
The "change" event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.

- CASE: BREAK
When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution inside the switch block. 
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
*/

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