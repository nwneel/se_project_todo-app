class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      //Calls the renderer, and pass it the item the item as an argument
      this._renderer(item);
    });
  }

  addItem(item) {
    //Adds element to the container
    this._container.append(item);
  }
}

export default Section;

//Section completed
