import { createElement } from '../render.js';
import { editPointFormView } from '../template/edit-point-form-template.js';

export default class EditPointFormView {
  getTemplate() {
    return editPointFormView();
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
