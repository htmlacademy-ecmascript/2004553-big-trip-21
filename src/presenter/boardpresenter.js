import { RenderPosition } from "../render.js";
import NewListView from "../view/trip-list.js";
import ListItemView from "../view/trip-list-item.js";
import EditPointFormView from "../view/edit-point-form.js";
import { render } from "../render.js";

export default class BoardPresenter {
  itemScope = 2;
  boardComponent = new NewListView();
  listItemComponent = new ListItemView();

  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);

    render(this.listItemComponent, this.boardComponent.getElement());
    render(new EditPointFormView(), this.listItemComponent.getElement(),RenderPosition.AFTERBEGIN);

    for (let i = 0; i < this.itemScope; i++) {
      render(new ListItemView(), this.boardComponent.getElement());
    }
  }
} 
 