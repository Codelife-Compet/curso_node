const handlers = require("../handlers");
test("View com contexto", () => {
  const req = {
    query: { style: "color:red" },
    cookies: { userId: "id" },
    session: { username: "usuário" },
  };
  const res = { render: jest.fn() };
  handlers.viewWithContent(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("greeting");
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({
      message: "Olá estimado programador!",
      style: req.query.style,
      userId: req.cookies.userId,
      username: req.session.username,
    })
  );
});
