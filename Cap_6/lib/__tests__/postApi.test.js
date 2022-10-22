const { Tour } = require("../../api/model/tour");
const { tourController } = require("../../api/tours");
const data = tourController.getData();
class TourControllerSpy {
  data = new Array(Tour);
  constructor({ data }) {
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
    if (!this.data?.find((tour) => tour.id === newTour.id)) {
      throw new Error("Tour já existe");
    }
  };
}
const makeTour = () => new TourControllerSpy(data);
describe("postApi", () => {
  it("O método deve lançar uma exceção caso o tipo de dado não seja adequado", () => {
    const tourControllerSpy = makeTour();
    const newData = {};
    const mock = () => {
      tourControllerSpy.postData(newData);
    };
    expect(mock).toThrow(
      new Error("Não foi possível cadastrar o novo tour, entrada inválida")
    );
  });
  it("O método deve lançar uma exceção caso o dado já exista no banco de dados", () => {
    const tourControllerSpy = makeTour();
    const newData = tourController.getData()[0];
    const mock = () => {
      tourControllerSpy.postData(newData);
    };
    expect(mock).toThrow(new Error("Tour já existe"));
  });
  it("O Método deve adicionar o novo dado ao banco de dados caso não exista um igual", () => {
    const newData = new Tour({
      id: 1,
      name: "Boston Medical Group",
      price: 199.99,
    });
    const tourControllerSpy = makeTour();
    const postData = jest.fn(() => {
      tourControllerSpy.postData(newData);
    });
    postData();
    expect(postData.mock.calls.length).toBe(1);
  });
});
