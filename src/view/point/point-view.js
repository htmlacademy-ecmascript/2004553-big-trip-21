import { createElement } from '../../render.js';
import { createPointTemplate } from './point-template.js';

export default class PointView {
  constructor({ point, destinationName, offers, offerSelectType }) {
    this.point = point;
    this.destinationName = destinationName;
    this.offerSelectType = offerSelectType;
   
  }

  getTemplate() {
    return createPointTemplate({
      point: this.point,
      destinationName: this.destinationName,
      offerSelectType: this.offerSelectType
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
