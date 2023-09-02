import NewListView from '../view/trip-list.js';
import ListItemView from '../view/trip-list-item.js';
import FormNewPoint from '../view/form-New-Point.js';
import EditPointFormView from '../view/edit-point-form.js';
import { render } from '../render.js';

export default class BoardPresenter {
  itemScope = 3;
  boardComponent = new NewListView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new EditPointFormView, this.boardComponent.getElement());
    render(new FormNewPoint, this.boardComponent.getElement());

    for (let i = 0; i < this.itemScope; i++) {
      render(new ListItemView(), this.boardComponent.getElement());
    }
  }
}
