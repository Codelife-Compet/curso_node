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
