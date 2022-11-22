const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const helpers = require("./helpers");
const router = require("./routes");

const app = express();
const port = process.env.port || 3333;
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
app.use(router);
// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`App listening on http://localhost:${port}`)
    )
  : (module.exports = app);
