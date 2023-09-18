import { createElement } from '../../render.js';
import { editPointFormView } from './point-edit-form-template.js';

export default class EditPointFormView {
  constructor({ destinationOne }) {
    this.destinationName = destinationOne;
  }

  getTemplate() {
    return editPointFormView({
      destination: this.destinationName,
    });
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
