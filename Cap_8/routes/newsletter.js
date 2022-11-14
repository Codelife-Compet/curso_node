const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("newsletter-signup", {
    csrf: "CSRF token pra cross reference, ainda não implementado",
  });
});
router.get("/thank-you", (req, res) => {
  res.render("thank-you");
});
router.post("/process", (req, res) => {
  const { _csrf, name, email } = req.body;
  const { form } = req.query;
  console.log("hidden _csrf : ", _csrf);
  console.log("Input name : ", name);
  console.log("Input email : ", email);
  console.log("Querystring Form : ", form);
  res.status(204).send();
});
module.exports = router;