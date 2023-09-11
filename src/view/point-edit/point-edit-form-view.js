import { createElement } from '../../render.js';
import { editPointFormView } from './point-edit-form-template.js';

export default class EditPointFormView {
  constructor() {
  }

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
