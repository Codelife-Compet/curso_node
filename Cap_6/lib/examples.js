exports.echoHeaders = (req, res) => {
  res.type("text/plain");
  const headers = Object.entries(req.headers).map(
    ([key, value]) => `${key} : ${value}`
  );
  res.send(headers.join("\n"));
};
exports.viewWithContent = (req, res) => {
  if (req.cookie && !req.cookies.userId) {
    res.cookie("userId", "123");
  }
  if (req.session && !req.session.username) {
    req.session.username = "Pablo Emilio Escobar";
  }
  const message = "Olá estimado programador!";
  const style = req.query.style || "color:inherit";
  const userId = req.cookies.userId || "userId não encontrado";
  const username = req.session.username || "usuário de teste";
  res.render("greeting", {
    message,
    style,
    userId,
    username,
  });
};
exports.noLayout = (_req, res) => {
  res.render("no-layout", { layout: null });
};
exports.customLayout = (_req, res) => {
  res.render("custom-layout", { layout: "custom" });
};
exports.plainText = (_req, res) => {
  res.type("text/plain");
  res.send("Apenas um texto");
};
exports.basicForm = (req, res) => {
  res.render("basicForm");
};
exports.basicFormProcess = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  console.log(` Nome de usuário :${username}, email : ${email}`);
  res.redirect(303, "thank-you");
};
exports.thankYou = (req, res) => {
  res.render("thank-you");
};
