const { Tour } = require("./model/tour");

const data = [
  new Tour({ id: 121, name: "Hood River", price: 122.9 }),
  new Tour({ id: 122, name: "Gregon Coast", price: 129.9 }),
];
class TourController {
  data;
  constructor(data) {
    this.data = Array.from(data);
  }

  getData = () => this.data;
  postData = ({ name, id, price }) => {
    if (!name || !id || !price) {
      throw new Error(
        "Não foi possível cadastrar o novo tour, entrada inválida"
      );
    }
    const newTour = new Tour({ name, id, price });
    const isExistingtour = this.data.find((tour) => tour.id === newTour.id);
    if (isExistingtour) {
      throw new Error("Tour já existe");
    }
    return this.data.push(newTour);
  };
}
const tourController = new TourController(data);
exports.tourController = tourController;
