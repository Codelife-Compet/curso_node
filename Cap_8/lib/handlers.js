const fortune = require("./fortune");
const codelifer = require("./codelifer");
const multiparty = require("multiparty");
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
exports.vacationAjax = (req, res) => {
  const now = new Date();
  res.render("contest/vacation-photo-ajax", {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });
};
exports.vacation = (req, res) => {
  const now = new Date();
  res.render("contest/vacation-photo", {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });
};
exports.newsletterSignupAjax = (req, res) => {
  res.render("newsletter-signup-ajax", {
    csrf: "CSRF token pra cross reference, ainda não implementado",
  });
};
exports.newsletterSignup = (req, res) => {
  res.render("newsletter-signup", {
    csrf: "CSRF token pra cross reference, ainda não implementado",
  });
};
exports.thankyou = (req, res) => {
  res.render("thank-you");
};
exports.newsletterSignupProcess = (req, res) => {
  const { _csrf, name, email } = req.body;
  const { form } = req.query;
  console.log("hidden _csrf : ", _csrf);
  console.log("Input name : ", name);
  console.log("Input email : ", email);
  console.log("Querystring Form : ", form);
  res.redirect(303, "thank-you");
};
exports.newsletterSignupProcessAjax = (req, res) => {
  const { _csrf, name, email } = req.body;
  const { form } = req.query;
  console.log("hidden _csrf : ", _csrf);
  console.log("Input name : ", name);
  console.log("Input email : ", email);
  console.log("Querystring Form : ", form);
  res.send({ result: "success" });
};
const contestProcess = (req, res, fields, files) => {
  console.log("field data :", fields);
  console.log("files data :", files);
  res.redirect(303, "/contest/thank-you");
};
exports.contestProcessAjax = (req, res, fields, files) => {
  console.log("field data :", fields);
  console.log("files data :", files);
  res.send({ result: "success" });
};
exports.vacationPhotoProcess = (req, res) => {
  console.log();
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    contestProcess(req, res, fields, files);
  });
};
