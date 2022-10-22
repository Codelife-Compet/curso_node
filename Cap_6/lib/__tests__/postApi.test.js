const { Tour } = require("../../api/model/tour");
const { tourController } = require("../../api/tours");
const data = tourController.getData();
class TourControllerSpy {
  data = new Array(Tour);
  constructor({ data }) {
    this.data = data;
  }

  getData = () => this.data;
  setData = (newTour) => {
    if (!(newTour instanceof Tour)) {
      throw new Error(
        "Não foi possível cadastrar o novo tour, entrada inválida"
      );
    }
    if (tourController.getData().includes(newTour)) {
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
      tourControllerSpy.setData(newData);
    };
    expect(mock).toThrow(
      new Error("Não foi possível cadastrar o novo tour, entrada inválida")
    );
  });
  it("O método deve lançar uma exceção caso o dado já exista no banco de dados", () => {
    const tourControllerSpy = makeTour();
    const newData = tourController.getData()[0];
    const mock = () => {
      tourControllerSpy.setData(newData);
    };
    expect(mock).toThrow(new Error("Tour já existe"));
  });
});
