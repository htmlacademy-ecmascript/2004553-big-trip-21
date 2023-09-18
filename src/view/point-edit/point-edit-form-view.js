import { createElement } from '../../render.js';
import { editPointFormView } from './point-edit-form-template.js';

export default class EditPointFormView {
  constructor({ destinationOne, cityOfNames }) {
    this.destinationName = destinationOne;
    this.cityOfNames = cityOfNames;
  }
  
  getTemplate() {
    return editPointFormView({
      destination: this.destinationName,
      cityOfNames: this.cityOfNames,
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
