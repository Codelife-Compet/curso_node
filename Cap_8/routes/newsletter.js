const express = require("express");
const {
  newsletterSignupAjax,
  newsletterSignup,
  newsletterSignupProcess,
  thankyou,
} = require("../lib/handlers");
const router = express.Router();
router.get("/", newsletterSignup);
router.get("/ajax", newsletterSignupAjax);
router.post("/process", newsletterSignupProcess);
router.get("/thank-you", thankyou);
module.exports = router;
