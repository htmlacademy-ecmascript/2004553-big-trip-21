import { mockOffers } from '../mock/mock';

export default class OffersModel {
  offers = mockOffers;

  getPoints() {
    return this.offers;
  }
}