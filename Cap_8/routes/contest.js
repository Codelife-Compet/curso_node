const express = require("express");
const multiparty = require("multiparty");
const router = express.Router();
const { contestProcess } = require("../lib/handlers");
router.get("/", (req, res) => {
  const now = new Date();
  console.log(now.getMonth() + 1);
  res.render("contest/vacation-photo", {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  });
});
router.get("/thank-you", (req, res) => {
  res.render("thank-you");
});
router.post("/vacation-photo/:year/:month", (req, res) => {
  console.log();
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    contestProcess(req, res, fields, files);
  });
});
module.exports = router;
