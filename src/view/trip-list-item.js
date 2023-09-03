import { createElement } from '../render.js';
import { createListItemView } from '../template/trip-list-item-template.js';

export default class ListItemView {
  getTemplate() {
    return createListItemView();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
