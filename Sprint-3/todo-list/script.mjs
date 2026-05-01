// Store everything imported from './todos.mjs' module as properties of an object named Todos 
import * as Todos from "./todos.mjs";

// To store the todo tasks
const todos = [];

// Set up tasks to be performed once on page load
window.addEventListener("load", () => {
  document.getElementById("add-task-btn").addEventListener("click", addNewTodo);
    document.getElementById("clear-completed-btn").addEventListener("click", () => {
    Todos.deleteCompleted(todos);
    populateTodoList();
  });

  // Populate sample data
  Todos.addTask(todos, "Wash the dishes", false); 
  Todos.addTask(todos, "Do the shopping", true);

  populateTodoList();
});


// A callback that reads the task description from an input field and 
// append a new task to the todo list.
function addNewTodo() {
  const taskInput = document.getElementById("new-task-input");
  const task = taskInput.value.trim();
  if (task) {
    Todos.addTask(todos, task, false);
    populateTodoList();
  }

  taskInput.value = "";
  deadlineInput.value = "";
}
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true);

  // Requirement: Display deadline next to the todo text
  const deadlineDisplay = todo.deadline ? ` (Due: ${todo.deadline})` : "";
  li.querySelector(".description").textContent = todo.task + deadlineDisplay;

  // Requirement: If completed, add strikethrough class and change icon to ✅
  if (todo.completed) {
    li.classList.add("completed");
    const icon = li.querySelector(".complete-btn span");
    icon.className = "fa-solid fa-square-check"; // Ticked checkbox
  }

  // Requirement: When checkbox icon is clicked, toggle completion
  li.querySelector('.complete-btn').addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    populateTodoList(); // Refresh the list to show strikethrough/tick
  });
    
  // Requirement: When trash icon is clicked, delete the item
  li.querySelector('.delete-btn').addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    populateTodoList(); // Refresh the list to remove the item
  });

  return li;
}

// Note:
// - Store the reference to the <ul> element with id "todo-list" here
//   to avoid querying the DOM repeatedly inside render().
// - This variable is declared here to be close to the only function that uses it.
const todoListEl = document.getElementById("todo-list");

// Render the whole todo list
function populateTodoList() {
  todoListEl.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoListItem = createListItem(todo, index);
    todoListEl.append(todoListItem);
  });
}


// Note:
// - First child of #todo-item-template is a <li> element.
//   We will create each ToDo list item as a clone of this node.
// - This variable is declared here to be close to the only function that uses it.
const todoListItemTemplate = 
  document.getElementById("todo-item-template").content.firstElementChild;

// Create a <li> element for the given todo task
function createListItem(todo, index) {
  const li = todoListItemTemplate.cloneNode(true); // true => Do a deep copy of the node

  li.querySelector(".description").textContent = todo.task;
  if (todo.completed) {
    li.classList.add("completed");
  }

  li.querySelector('.complete-btn').addEventListener("click", () => {
    Todos.toggleCompletedOnTask(todos, index);
    populateTodoList();
  });
    
  li.querySelector('.delete-btn').addEventListener("click", () => {
    Todos.deleteTask(todos, index);
    populateTodoList();
  });

  return li;
}