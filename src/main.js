import { RenderPosition } from './render.js';
import tripInfoView from './view/trip-info/trip-info-view.js';
import FilterListView from './view/list-filter/list-filter-view.js';
import SortListView from './view/list-sort/list-sort-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationModel from './model/destination-model.js';
import { render } from './render.js';

const headerElement = document.querySelector('.trip-main');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const sectionTrip = document.querySelector('.trip-events');

const pointsModel = new PointsModel(); 
const destinationModel = new DestinationModel();
const offersModel = new OffersModel ();
//Создать экземпляр моделей destinatiopn model и offers model 

//Всякие заголовки цены и фильтры в хэдэре
render(new tripInfoView(), headerElement, RenderPosition.AFTERBEGIN);
render(new FilterListView(), siteFiltersElement);
render(new SortListView(), sectionTrip);

//тут презентер выведет в майн всякие полезные информации теперь понятно почему он так нужен, а то если бы не он тут бы такая каша была бы...
const boardPresenterRendering = new BoardPresenter({
  boardContainer: sectionTrip,
  pointsModel,
  destinationModel,
  offersModel
});
boardPresenterRendering.init();
