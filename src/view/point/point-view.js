import { createElement } from '../../render.js';
import { createListItemView } from './point-template.js';

export default class PointView {
  constructor({ point, destinationName }) {
    this.point = point;
    this.destinationName = destinationName;
  }

  getTemplate() {
    return createListItemView({
      point: this.point,
      destinationName: this.destinationName,
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
