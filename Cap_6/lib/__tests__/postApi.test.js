const { Tour } = require("../../api/model/tour");
const { tourController } = require("../../api/tours");
describe("postApi", () => {
  const setData = (data) => {
    if (!(data instanceof Tour)) {
      throw new Error(
        "Não foi possível cadastrar o novo tour, entrada inválida"
      );
    }
    if (tourController.getData().includes(data)) {
      throw new Error("Tour já existe");
    }
  };
  it("O método deve lançar uma exceção caso o tipo de dado não seja adequado", () => {
    const newData = {};
    const mock = () => {
      setData(newData);
    };
    expect(mock).toThrow(
      new Error("Não foi possível cadastrar o novo tour, entrada inválida")
    );
  });
  it("O método deve lançar uma exceção caso o dado já exista no banco de dados", () => {
    const newData = tourController.getData()[0];
    const mock = () => {
      setData(newData);
    };
    expect(mock).toThrow(new Error("Tour já existe"));
  });
});
