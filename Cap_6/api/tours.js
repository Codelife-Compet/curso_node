const { Tour } = require("./model/tour");

const data = [
  new Tour({ id: 121, name: "Hood River", price: 122.9 }),
  new Tour({ id: 122, name: "Gregon Coast", price: 129.9 }),
];
class TourController {
  data;
  getData = () => this.data;
  constructor(data) {
    this.data = data;
  }
}
const tourController = new TourController(data);
exports.tourController = tourController;
