import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    // Saves handleFormSubmit to the this object
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValue() {
    // move to constructor
    this._inputList = this._popupForm.querySelectorAll(".popup__input");

    const values = {};
    this._inputList.array.forEach((input) => {
      // Todo
      // add a key value pair to the values object for each input
      // the key is input.name
      // the value is input.value
      // need to use brackets notation, not dot notation
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._inputValues = this._inputValues();
      //Todo-Pass result of getInputValues to submission handler
      //calls handleFormSubmit
      this._handleFormSubmit(evt);
    });
  }
}

export default PopupWithForm;
