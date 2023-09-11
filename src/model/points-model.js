import { mockPoints } from '../mock/mock';

export default class PointsModel {
  points = mockPoints;

  getPoints() {
    return this.points;
  }
}
