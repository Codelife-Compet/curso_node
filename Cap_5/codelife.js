const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const app = express();
const handlers = require("./lib/handlers");
const port = process.env.port || 3333;
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
});
// Configurações do app como referência de arquivos estáticos, view engine e etc...
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
// Servindo as rotas configuradas anteriormente através dos handlers definidos no capítulo atual
app.get("/", handlers.home);
app.get("/about", handlers.about);
app.get("/cookieSort", handlers.cookieSort);
app.use(handlers.notFound);
app.use(handlers.serverError);
// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  : (module.exports = app);
