import { createElement } from '../render.js';
import { createNewPoint } from '../template/add-new-point-template.js';

export default class FormNewPoint {
  getTemplate() {
    return createNewPoint();
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
