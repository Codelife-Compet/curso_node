const express = require("express");
const multiparty = require("multiparty");
const router = express.Router();
const contestProcess = (req, res, fields, files) => {
  console.log("field data :", fields);
  console.log("files data :", files);
  res.redirect(303, "/contest/thank-you");
};
router.get("/", (req, res) => {
  const { year, month } = req.query;
  res.render("contest/vacation-photo", { year, month });
});
router.get("/thank-you", (req, res) => {
  res.render("thank-you");
});
router.post("/vacation-photo/:year/:month", (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    contestProcess(req, res, fields, files);
  });
});
module.exports = router;
