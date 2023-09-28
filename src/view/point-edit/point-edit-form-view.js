import { createElement } from '../../render.js';
import { createPointFormTemplate } from './point-edit-form-template.js';

export default class EditPointFormView {
  constructor({ destinationOne, destinationNames, onePoint, offers }) {
    this.destinationName = destinationOne;
    this.destinationNames = destinationNames;
    this.onePoint = onePoint;
    this.offers = offers;
  }

  getTemplate() {
    return createPointFormTemplate({
      destination: this.destinationName,
      destinationNames: this.destinationNames,
      onePoint: this.onePoint,
      offers: this.offers,
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
