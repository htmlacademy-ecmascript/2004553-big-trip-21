import { mockDestinations } from '../mock/mock';

export default class DestinationModel {
 destinations = mockDestinations;


 getDestinations () {
  return this.destinations;
 }

//  getDestinationById (id) {
//   return this.destinations.find((destination) => destination.id === id);
//  }
}