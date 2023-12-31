import { createElement } from '../../render.js';
import { createFilterListTemplate } from './list-filter-template.js';

export default class FilterListView {
  getTemplate() {
    return createFilterListTemplate();
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
