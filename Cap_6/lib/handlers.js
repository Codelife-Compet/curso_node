const fortune = require("./fortune");
const codelifer = require("./codelifer");
exports.home = (_req, res) => {
  res.render("home");
};
exports.about = (_req, res) => {
  res.render("about");
};
exports.cookieSort = (_req, res) => {
  res.render("cookieSort", {
    fortune: fortune.getFortune(),
    codelifer: codelifer.getCodelifer(),
  });
};
exports.notFound = (_req, res) => {
  res.status(404);
  res.render("404");
};
exports.serverError = (_err, _req, res, _next) => {
  res.status(500);
  res.render("500");
};
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
