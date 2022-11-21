const express = require("express");
const router = express.Router();
const multiparty = require("multiparty");
const { contestProcessAjax } = require("../lib/handlers");
router.post("/newsletter-signup", (req, res) => {
  const { _csrf, name, email } = req.body;
  const { form } = req.query;
  console.log("hidden _csrf : ", _csrf);
  console.log("Input name : ", name);
  console.log("Input email : ", email);
  console.log("Querystring Form : ", form);
  res.send({ result: "success" });
});
router.post("/vacation-photo-contest/:year/:month", (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    contestProcessAjax(req, res, fields, files);
  });
});
module.exports = router;
