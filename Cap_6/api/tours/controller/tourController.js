const { Tour } = require("../model/tour");

const dataApi = [
  new Tour({ id: 121, name: "Hood River", price: 122.9 }),
  new Tour({ id: 122, name: "Gregon Coast", price: 129.9 }),
];
class TourController {
  data;
  constructor(data) {
    this.data = data;
  }

  getData = () => this.data;
  postData = ({ name, id, price }) => {
    if (!name || !id || !price) {
      throw new Error(
        "Não foi possível cadastrar o novo tour, entrada inválida"
      );
    }
    const newTour = new Tour({ name, id, price });
    const existentTour = this.data.find((tour) => tour.id === newTour.id);
    if (existentTour) {
      throw new Error("Tour já existe");
    }
    const length = this.data.push(newTour);
    return { length, novoTourId: newTour.id };
  };
}
const tourController = new TourController(dataApi);
exports.tourController = tourController;
exports.TourController = TourController;
