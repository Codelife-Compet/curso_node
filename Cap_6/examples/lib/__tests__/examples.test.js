const examples = require("../examples");
test("View com contexto", () => {
  const req = {
    query: { style: "color:red" },
    cookies: { userId: "id" },
    session: { username: "usuário" },
  };
  const res = { render: jest.fn() };
  examples.viewWithContent(req, res);
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
test("View sem layout", () => {
  const req = {};
  const res = { render: jest.fn() };
  examples.noLayout(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("no-layout");
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({ layout: null })
  );
});
test("View com layout personalizado", () => {
  const req = {};
  const res = { render: jest.fn() };

  examples.customLayout(req, res);

  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("custom-layout");
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({ layout: "custom" })
  );
});
test("Renderizando view com saída apenas em texto", () => {
  const req = {};
  const res = { type: jest.fn(), send: jest.fn() };

  examples.plainText(req, res);

  expect(res.type.mock.calls.length).toBe(1);
  expect(res.type.mock.calls[0][0]).toBe("text/plain");
  expect(res.send.mock.calls.length).toBe(1);
  expect(res.send.mock.calls[0][0]).toBe("Apenas um texto");
});
test("Construção de um formulário básico", () => {
  const req = { body: { name: "nome de teste", email: "testMail@gmail.com" } };
  const res = { redirect: jest.fn() };

  examples.basicFormProcess(req, res);

  expect(res.redirect.mock.calls.length).toBe(1);
  expect(res.redirect.mock.calls[0][0]).toBe(303);
  expect(res.redirect.mock.calls[0][1]).toBe("/thank-you");
});
