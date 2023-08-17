import { RenderPosition } from "./render.js";
import tripInfoView from "./view/trip-info.js";
import FilterListView from "./view/list-filter-view.js";
import SortListView from "./view/list-sort-view.js";
import BoardPresenter from "./presenter/boardpresenter.js";
import { render } from "./render.js";

const headerElement = document.querySelector(".trip-main");
const siteFiltersElement = document.querySelector(".trip-controls__filters");
const sectionTrip = document.querySelector(".trip-events");

//Всякие заголовки цены и фильтры в хэдэре
render(new tripInfoView(), headerElement, RenderPosition.AFTERBEGIN);
render(new FilterListView(), siteFiltersElement);
render(new SortListView(), sectionTrip);

//тут презентер выведет в майн всякие полезные информации теперь понятно почему он так нужен, а то если бы не он тут бы такая каша была бы...
const BoardPresenterRendering = new BoardPresenter({
  boardContainer: sectionTrip,
});
BoardPresenterRendering.init();
