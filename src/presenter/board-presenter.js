import PointListView from '../view/point-list/point-list-view.js';
import PointView from '../view/point/point-view.js';
import EditPointFormView from '../view/point-edit/point-edit-form-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  boardComponent = new PointListView();

  constructor({ boardContainer, pointsModel, destinationModel, offersModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationModel.getDestinations()];
    this.offersModels = [...this.offersModel.getOffers()];

    // Константы с нужными кусками данных надеюсь в будущем покажут как это можно по нормальному сделать, а то так как то как будто лишние детали
    const destinationOne = this.destinations[1];
    const destinationNames = this.destinationModel.getDestinationsNames();
    const offers = this.offersModels;
    //

    render(this.boardComponent, this.boardContainer);
    render(
      new EditPointFormView({
        destinationOne,
        destinationNames,
        onePoint: this.boardPoints[0],
        offers,
      }),
      this.boardComponent.getElement()
    );

    for (let i = 1; i < this.boardPoints.length; i++) {
      const point = this.boardPoints[i];
      const destinationName = this.destinations[i];
      // debugger;
      const offerSelectType = this.offersModel.getOffersByType(point.type).offers.filter((offer) => point.offers.includes(offer.id));

      render(
        new PointView({
          point,
          destinationName,
          offers,
          offerSelectType,
        }),
        this.boardComponent.getElement()
      );
    }
  }
}
