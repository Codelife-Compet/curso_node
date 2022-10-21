const { tourController } = require("../../api/tours");
const { Tour } = require("../../api/model/tour");
const data = tourController.getData();
const { getTours } = require("../api");
describe("toursApi", () => {
  it("A coleção de Tours deve possuir dados", () => {
    expect(data.length).toBeGreaterThan(0);
  });

  it("A api possua um método que retorne um conjunto de dados", () => {
    const mock = jest.fn(() => tourController.getData());
    mock();
    expect(mock).toHaveReturnedWith(expect.arrayContaining([expect.any(Tour)]));
  });
  for (const tour of data) {
    it("Um tour deve possuir apenas dados especificados", () => {
      expect(tour).toEqual(expect.any(Tour));
    });
  }
  it("O usuário possa acessar os dados em formato JSON", () => {
    const req = {};
    const res = { json: jest.fn() };
    getTours(req, res);
    expect(res.json.mock.calls.length).toBe(1);
    expect(res.json.mock.calls[0][0]).toBe(data);
  });
});
