import { createElement } from '../../render.js';
import { tripInfoView } from './trip-info-template.js';

export default class TripInfoView {
  getTemplate() {
    return tripInfoView();
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
