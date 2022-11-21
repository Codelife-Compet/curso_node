test("Testando handler da página com seções", () => {
  const req = {};
  const res = { render: jest.fn() };
  const sut = (req, res) => {};
  sut(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("section-test");
});
