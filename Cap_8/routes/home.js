const handlers = require("../lib/handlers");
const router = require("express").Router();
router.get("/", handlers.home);
router.get("/about", handlers.about);
router.get("/cookieSort", handlers.cookieSort);
router.get("/photo", handlers.photos);
module.exports = router;
