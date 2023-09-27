import { createElement } from '../../render.js';
import { createPointTemplate } from './point-template.js';

export default class PointView {
  constructor({ point, destinationName, offers }) {
    this.point = point;
    this.destinationName = destinationName;
    this.selectedOffers = offers;
  }

  getTemplate() {
    return createPointTemplate({
      point: this.point,
      destinationName: this.destinationName,
      selectedOffers: this.selectedOffers,
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
