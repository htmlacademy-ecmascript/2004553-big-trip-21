import { mockOffers } from '../mock/mock';

export default class OffersModel {
  offers = mockOffers;

  getOffers() {
    return this.offers;
  }
}