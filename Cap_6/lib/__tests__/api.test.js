const { tours } = require("../../api/tours");
const { getTours } = require("../api");
describe("toursApi", () => {
  it("A coleção de Tours deve possuir dados", () => {
    expect(tours.length).toBeGreaterThan(0);
  });
  for (const tour of tours) {
    it("Um tour deve possuir apenas dados especificados", () => {
      expect(tour).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
        })
      );
    });
  }
  it("O usuário possa acessar os dados em formato JSON", () => {
    const req = {};
    const res = { json: jest.fn() };
    getTours(req, res);
    expect(res.json.mock.calls.length).toBe(1);
    expect(res.json.mock.calls[0][0]).toBe(tours);
  });
});
