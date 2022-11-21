const { notFound } = require("../notFound");
test("notFound page renders", () => {
  const req = {};
  const res = { render: jest.fn(), status: jest.fn() };
  notFound(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.status.mock.calls[0][0]).toBe(404);
  expect(res.render.mock.calls[0][0]).toBe("404");
});
