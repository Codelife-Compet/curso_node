const handlers = require("../handlers");
test("home page renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.home(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("home");
});
test("about page renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.about(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("about");
});
test("cookieSort page renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.cookieSort(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("cookieSort");
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({
      codelifer: expect.stringMatching(/\w/),
      fortune: expect.stringMatching(/\w/),
    })
  );
});
test("notFound page renders", () => {
  const req = {};
  const res = { render: jest.fn(), status: jest.fn() };
  handlers.notFound(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.status.mock.calls[0][0]).toBe(404);
  expect(res.render.mock.calls[0][0]).toBe("404");
});
test("serverError page renders", () => {
  const req = {};
  const err = new Error("Algum erro");
  const res = { render: jest.fn(), status: jest.fn() };
  const next = jest.fn();
  handlers.serverError(err, req, res, next);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.status.mock.calls[0][0]).toBe(500);
  expect(res.render.mock.calls[0][0]).toBe("500");
});
