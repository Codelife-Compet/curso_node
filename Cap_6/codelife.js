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
app.get("/text", handlers.text);
app.get("/custom-layout", handlers.customLayout);
app.get("/no-layout", handlers.noLayout);
app.get("/greeting", handlers.greeting);
app.get("/contact-error", handlers.contactError);
app.get("/echoheaders", handlers.echoHeaders);
app.get("/create-tours", handlers.createTours);
app.use(handlers.notFound);
app.use(handlers.serverError);

// Basic Form
app.post("/basicForm/process", handlers.basicFormProcess);

app.get("/basicForm", handlers.basicForm);

// Robust Form

app.post("/robustForm/process", handlers.robustFormProcess);

app.get("/robustForm", handlers.robustForm);

// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  : (module.exports = app);
