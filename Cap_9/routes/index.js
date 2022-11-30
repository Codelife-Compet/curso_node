const { Router } = require("express");
const {
  notFound,
  serverError,
  flash,
  authentication,
} = require("../middlewares");
const { authRouter } = require("./auth");
const router = Router();
router.use(flash);
router.use("/auth", authRouter);
router.get("/", authentication, (req, res) => {
  res.render("home");
});
router.get("/about", authentication, (req, res) => {
  res.render("about");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/*", (req, res) => {
  res.render("404");
});
router.get("/createCookie", (req, res) => {
  res.cookie("teste", "hmmm testei");
  res.cookie("teste2", "hmmm testei2 mas assinado", { signed: true });
  res.json({ message: "Cookies salvos" });
});
router.get("/pegandoCookies", (req, res) => {
  const cookies = req.cookies;
  const signedCookies = req.signedCookies;
  res.json({ cookies, signedCookies });
});
router.get("/excluirCookies/:cookie", (req, res) => {
  const { cookie } = req.params;
  if (!cookie) {
    res
      .status(400)
      .json({ message: "Nenhum cookie foi informado para ser excluido" });
  }
  res.clearCookie(cookie);
  res.json({ message: "Cookie excluido" });
});
router.use(notFound);
router.use(serverError);
module.exports = router;
