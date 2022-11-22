const { serverError } = require("../serverError");
test("serverError page renders", () => {
  const req = {};
  const err = new Error("Algum erro");
  const res = { render: jest.fn(), status: jest.fn() };
  const next = jest.fn();
  serverError(err, req, res, next);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.status.mock.calls[0][0]).toBe(500);
  expect(res.render.mock.calls[0][0]).toBe("500");
});
