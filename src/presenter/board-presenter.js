import PointListView from '../view/point-list/point-list-view.js';
import PointView from '../view/point/point-view.js';
import EditPointFormView from '../view/point-edit/point-edit-form-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  boardComponent = new PointListView();

  constructor({ boardContainer, pointsModel, destinationModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new EditPointFormView(), this.boardComponent.getElement());

    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationModel.getDestinations()];

    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = this.boardPoints[i];
      const pointDestination = this.destinationModel.getDestinationById(point.id)
      console.log(pointDestination);

      render(
        new PointView({
          point,
          pointDestination,
        }),
        this.boardComponent.getElement()
      );
    }
  }
}
