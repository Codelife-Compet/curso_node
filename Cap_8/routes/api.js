const express = require("express");
const router = express.Router();

router.post("/newsletter-signup", (req, res) => {
  const { _csrf, name, email } = req.body;
  const { form } = req.query;
  console.log("hidden _csrf : ", _csrf);
  console.log("Input name : ", name);
  console.log("Input email : ", email);
  console.log("Querystring Form : ", form);
  res.send({ result: "success" });
});

module.exports = router;
