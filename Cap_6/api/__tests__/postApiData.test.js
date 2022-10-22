const { Tour } = require("../../api/model/tour");
const { tourController } = require("../../api/tours");
const { postTours } = require("../tourController");
const data = tourController.getData();
class TourControllerSpy {
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
    return { length: this.data.push(newTour), novoTourId: newTour.id };
  };
}
const makeTour = () => new TourControllerSpy(data);
const postTourSpy = (req, res) => {
  const tour = req.body.tour;
  const tourControllerSpy = makeTour();
  try {
    tourControllerSpy.postData({
      id: tour.id,
      name: tour.name,
      price: tour.price,
    });
    res.status(201);
    res.json({ success: true, createdTour: tour });
  } catch (error) {
    console.error(error);
    res.status(403);
    res.json({ code: 403, error });
  }
};
describe("postApi", () => {
  it("O método deve lançar uma exceção caso o tipo de dado não seja adequado", () => {
    // Arrange

    const tourControllerSpy = makeTour();
    const newData = {};
    // Act
    const mock = () => {
      tourControllerSpy.postData(newData);
    };
    // Assert
    expect(mock).toThrow(
      new Error("Não foi possível cadastrar o novo tour, entrada inválida")
    );
  });
  it("O método deve lançar uma exceção caso o dado já exista no banco de dados", () => {
    // Arrange

    const tourControllerSpy = makeTour();
    const newData = new Tour({ id: 121, name: "Hood River", price: 122.9 });

    // Act

    const mock = () => {
      tourControllerSpy.postData({ ...newData });
    };

    // Assert

    expect(mock).toThrow(new Error("Tour já existe"));
  });
  it("O Método deve adicionar o novo dado ao banco de dados caso não exista um igual", () => {
    // Arrange

    const newData = new Tour({
      id: 1,
      name: "Boston Medical Group",
      price: 199.99,
    });
    const tourControllerSpy = makeTour();
    const postData = jest.fn(() => tourControllerSpy.postData({ ...newData }));
    const lengthOfData = tourControllerSpy.data.length;

    // Act

    postData();

    // Assert

    expect(postData.mock.calls.length).toBe(1);
    expect(postData).toHaveReturnedWith(
      expect.objectContaining({
        length: lengthOfData + 1,
        novoTourId: newData.id,
      })
    );
  });
  it("O usuário receba uma mensagem de erro caso não seja possível cadastra o novo tour", () => {
    // Arrange

    const req = { body: { tour: { faketour: "fail tour" } } };
    const res = { status: jest.fn(), json: jest.fn() };

    // Act

    postTourSpy(req, res);

    // Assert

    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status.mock.calls[0][0]).toBe(403);
    expect(res.json.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        code: 403,
        error:
          new Error(
            "Não foi possível cadastrar o novo tour, entrada inválida"
          ) || new Error("Tour já existe"),
      })
    );
  });
  it("O usuário receba uma mensagem em formato json informando sucesso e retornando o tour cadastrado", () => {
    // Arrange

    const req = {
      body: { tour: { id: 12, name: "Any Tour name", price: 129.99 } },
    };
    const res = { status: jest.fn(), json: jest.fn() };

    // Act

    postTourSpy(req, res);

    // Assert

    expect(res.status.mock.calls.length).toBe(1);
    expect(res.status.mock.calls[0][0]).toBe(201);
    expect(res.json.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        success: true,
        createdTour: req.body.tour,
      })
    );
  });
});
