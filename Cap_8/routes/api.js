const express = require("express");
const router = express.Router();
const multiparty = require("multiparty");
const {
  contestProcessAjax,
  newsletterSignupProcessAjax,
} = require("../lib/handlers");
router.post("/newsletter-signup", newsletterSignupProcessAjax);
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
