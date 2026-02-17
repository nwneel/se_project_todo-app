class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._data = data;
    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
    this._templateElement = document.querySelector(this._selector);
  }

  _setEventListeners() {
    //sets up delete button handler
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      //sets change listener on checkbox el
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });
  }
  /*
  Use const for:
Variables that only exist within one method


Use this for:
Data that needs to be shared between different methods in the class
  */

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _toggleCompletion = () => {
    this._completed = !this._completed;
  };

  _remove = () => {
    this._todoElement.remove();

    this._todoElement = null;
  };

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this._data.name;
    //implements dates
    if (this._data.date) {
      const date = new Date(this._data.date);
      this._todoDate.textContent = `Due: ${date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
