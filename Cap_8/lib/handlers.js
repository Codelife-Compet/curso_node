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

exports.contestProcess = (req, res, fields, files) => {
  console.log("field data :", fields);
  console.log("files data :", files);
  res.redirect(303, "/contest/thank-you");
};
exports.contestProcessAjax = (req, res, fields, files) => {
  console.log("field data :", fields);
  console.log("files data :", files);
  res.send({ result: "success" });
};
