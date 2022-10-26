const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const app = express();
const handlers = require("./lib/handlers");
const port = process.env.port || 3333;
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
});
const bodyParser = require("body-parser");
// Configurações do app como referência de arquivos estáticos, view engine e etc...
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser("abc"));

// Implementando sessão
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "abc",
  })
);

app.get("/", handlers.home);
app.get("/about", handlers.about);
app.get("/cookieSort", handlers.cookieSort);
app.get("/thank-you", handlers.thanks);
app.get("/greeting", (req, res) => {
  if (req.cookie && !req.cookies.userId) {
    res.cookie("userId", "123");
  }
  if (req.session && !req.session.username) {
    req.session.username = "Pablo Emilio Escobar";
  }
  const message = "Olá estimado programador!";
  const style = req.query.style || "color:inherit";
  const userId = req.cookies.userId || "userId nao encontrado";
  const username = req.session.username || "Usuario nao encontrado";
  res.render("greeting", { message, style, userId, username });
});
app.get("/robustForm", (req, res) => {
  res.render("robustForm");
});
app.get("/custom-layout", (req, res) =>
  res.render("custom-layout", { layout: "custom" })
);
app.get("/no-layout", (req, res) => res.render("no-layout", { layout: null }));

app.get("/text", (req, res) => {
  res.type("text/plain");
  res.send("this is a teste");
});
app.post("/basicForm/process", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  console.log(` Nome de usuário :${username}, email : ${email}`);
  res.redirect(303, "/thank-you");
});

app.get("/basicForm", (req, res) => {
  res.render("basicForm");
});

app.post("/robustForm/process", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  try {
    // here's where we would try to save contact to database or other
    // persistence mechanism...for now, we'll just simulate an error
    if (req.body.simulateError) throw new Error("Error saving contact!");
    console.log(`contact from ${username} <${email}>`);
    res.format({
      "text/html": () => res.redirect(303, "/thank-you"),
      "application/json": () => res.json({ success: true }),
    });
  } catch (err) {
    // here's where we would handle any persistence failures
    console.error(`error processing contact from ${username} + <${email}>`);
    res.format({
      "text/html": () => res.redirect(303, "/contact-error"),
      "application/json": () =>
        res.status(500).json({
          error: "error saving contact information",
        }),
    });
  }
});
app.get("/robustForm", (req, res) => {
  res.render("robustForm");
});
app.get("/contact-error", (req, res) => {
  res.render("contact-error");
});

app.use(handlers.notFound);
app.use(handlers.serverError);

// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  : (module.exports = app);
