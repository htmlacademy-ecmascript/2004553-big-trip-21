import { mockDestinations } from '../mock/mock';

export default class DestinationModel {
  destinations = mockDestinations;

  getDestinations() {
    return this.destinations;
  }

  getDestinationsNames() {
    return this.destinations.map((destination) => destination.name);
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
