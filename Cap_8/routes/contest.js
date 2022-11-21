const express = require("express");
const router = express.Router();
const {
  vacation,
  thankyou,
  vacationAjax,
  vacationPhotoProcess,
} = require("../lib/handlers");
router.get("/", vacation);
router.get("/ajax", vacationAjax);
router.get("/thank-you", thankyou);
router.post("/vacation-photo/:year/:month", vacationPhotoProcess);
module.exports = router;
