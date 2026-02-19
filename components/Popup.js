class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose = (evt) => {
    console.log("some key was pressed");
    if (evt.key === "Escape") {
      //Calls the close method
      this.close();
    }
  };

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    // removes the class from the popup element
    this._popupElement.classList.remove("popup_visible");
    // removes the escape listener which is is crucial for memory management and preventing bugs.
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    // This one listener will handle close button and modal listener
    this._popupElement.addEventListener("mousedown", (evt) => {
      // if the event target's classList contains popup__close or popup
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      )
        // then close the modal
        this.close();
    });
  }
}

export default Popup;

//Popup completed
