const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const app = express();
const handlers = require("./lib/handlers");
const port = process.env.port || 3333;
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
});
// Configurações do app como referência de arquivos estáticos, view engine e etc...
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

// Configuração dos cookies. O segredo do cookie normalmente é armazenado em uma variável de ambiente
app.use(cookieParser("abc"));

// Configuração de uma sessão no express. O uso deve estar após o middleware de cookies e o segredo deve ser igual ao segredo do cookie

app.use(
  expressSession({
    resave: false,
    saveUnintialized: false,
    secret: "abc",
  })
);

// Servindo as rotas configuradas anteriormente através dos handlers definidos no capítulo atual

app.get("/", handlers.home);
app.get("/about", handlers.about);
app.get("/cookieSort", handlers.cookieSort);
app.get("/echoHandlers", handlers.echoHeaders);
app.get("/greeting", handlers.viewWithContent);
app.get("/noLayout", handlers.noLayout);
app.get("/customLayout", handlers.customLayout);
app.use(handlers.notFound);
app.use(handlers.serverError);
// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  : (module.exports = app);
