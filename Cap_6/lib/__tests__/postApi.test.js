const { Tour } = require("../../api/model/tour");
describe("postApi", () => {
  const setData = (data) => {
    if (!(data instanceof Tour)) {
      throw new Error(
        "Não foi possível cadastrar o novo tour, entrada inválida"
      );
    }
  };
  it("O método deve retornar um erro caso o tipo de dado não seja adequado", () => {
    const newData = {};
    const mock = () => {
      setData(newData);
    };
    expect(mock).toThrow(
      new Error("Não foi possível cadastrar o novo tour, entrada inválida")
    );
  });
});
