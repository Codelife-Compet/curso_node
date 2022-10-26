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
  res.render("404", { message: "Achou nada" });
};
exports.serverError = (_err, _req, res, _next) => {
  console.error("** SERVER ERROR: " + _err.message);
  res.status(500).render("500", { message: "you shouldn't have clicked that" });
};

exports.thanks = (req, res) => {
  res.render("thank-you");
};
