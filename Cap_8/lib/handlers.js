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
exports.newsletterSignup = (req, res) => {
  const { _csrf, name, email } = req.body;
  const { form } = req.query;
  console.log("hidden _csrf : ", _csrf);
  console.log("Input name : ", name);
  console.log("Input email : ", email);
  console.log("Querystring Form : ", form);
  res.send({ result: "success" });
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
