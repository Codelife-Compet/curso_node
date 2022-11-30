const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const { credentials, helpers } = require("./config");
const router = require("./routes");
const app = express();
const port = process.env.port || 3333;
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
  helpers,
});

// Setup do app

app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));

// Middlewares globais

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(credentials.cookieSecret));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
  })
);
// Rotas da aplicação
app.use(router);

// Iniciando server

require.main === module
  ? app.listen(port, () =>
      console.log(`App listening on http://localhost:${port}`)
    )
  : (module.exports = app);
