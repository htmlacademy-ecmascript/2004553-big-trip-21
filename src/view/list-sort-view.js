import { createElement } from '../render.js';
import { createSortListTemplate } from '../template/list-sort-template.js';

export default class SortListView {
  getTemplate() {
    return createSortListTemplate();
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
