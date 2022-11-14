const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const app = express();
const handlers = require("./lib/handlers");
const port = process.env.port || 3333;
const helpers = require("./helpers");
const newsletterRouter = require("./routes/newsletter");
const apiRouter = require("./routes/api");

const bodyParser = require("body-parser");
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
  helpers,
});
// Configurações do app como referência de arquivos estáticos, view engine e etc...
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Usando rotas como middleware
app.use("/newsletter-signup", newsletterRouter);
app.use("/api", apiRouter);
// Acesso às rotas da aplicação
app.get("/", handlers.home);
app.get("/about", handlers.about);
app.get("/cookieSort", handlers.cookieSort);

// Rotas de erro
app.use(handlers.notFound);
app.use(handlers.serverError);
// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`App listening on http://localhost:${port}`)
    )
  : (module.exports = app);
