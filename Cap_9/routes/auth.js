const { Router } = require("express");

const authRouter = Router();
const {
  registerHandler,
  loginHandler,
  refreshHandler,
} = require("../handlers/auth.handlers");
authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);
authRouter.post("/refresh", refreshHandler);
authRouter.get("/logout", (req, res) => {
  res.clearCookie("refreshToken");
  delete req.session.username;
  return res.redirect(303, "/");
});
module.exports = { authRouter };
