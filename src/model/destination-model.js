import { mockDestinations } from '../mock/mock';

export default class DestinationModel {
  destinations = mockDestinations;

  getDestinations() {
    return this.destinations;
  }

  getNameCity() {
    const cityNames = this.destinations
      .map(
        (destinationName) => `<option value='${destinationName.name}'></option>`
      )
      .join('');
    return cityNames;
  }
  
  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
