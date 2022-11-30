const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  newsletterSignupProcessAjax,
  vacationPhotoProcessAjax,
  uploadPhotoProcess,
} = require("../lib/handlers");
const { upload: uploadConfig } = require("../config/upload");

const uploadPhoto = multer(uploadConfig("./public/tmp"));
router.post("/newsletter-signup", newsletterSignupProcessAjax);
router.post("/vacation-photo-contest/:year/:month", vacationPhotoProcessAjax);
router.post("/upload-photo", uploadPhoto.single("photo"), uploadPhotoProcess);
module.exports = router;
