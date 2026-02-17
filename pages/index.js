import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoBtn = document.querySelector(".button_action_add");

const handleFormSubmit = (inputValues) => {
  const name = inputValues.name;
  const dateInput = inputValues.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();

  const values = {
    name,
    date,
    id,
  };

  const todoElement = generateTodo(values);
  section.addItem(todoElement);

  todoCounter.updateTotal(true);

  //newTodoValidator.resetValidation();
  addTodoPopup.close();
};

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit,
});

addTodoPopup.setEventListeners();

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos, //passes intial todos
  renderer: (item) => {
    // generates todo item
    // and adds it to the todo list
    const element = generateTodo(item);
    section.addItem(element);
  },
  containerSelector: ".todos__list",
});
// calls section instance's renderItems method
section.renderItems();

addTodoBtn.addEventListener("click", () => {
  addTodoPopup.open();
});

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const addTodoForm = document.forms["add-todo-form"];

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
