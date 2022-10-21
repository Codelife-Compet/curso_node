const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const app = express();
const handlers = require("./lib/handlers");
const examples = require("./lib/examples");
const api = require("./lib/api");
const port = process.env.port || 3333;
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
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
    saveUninitialized: false,
    secret: "abc",
  })
);

// Configuração do body-parser para o processamento do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Servindo as rotas configuradas anteriormente através dos handlers definidos no capítulo atual

app.get("/", handlers.home);
app.get("/about", handlers.about);
app.get("/cookieSort", handlers.cookieSort);

// exemplos do capítulo 6

app.get("/echoHandlers", examples.echoHeaders);
app.get("/greeting", examples.viewWithContent);
app.get("/noLayout", examples.noLayout);
app.get("/customLayout", examples.customLayout);
app.get("/basicForm", examples.basicForm);
app.post("/basicForm/process", examples.basicFormProcess);
app.get("/robustForm", examples.robustForm);
app.post("/robustForm/process", examples.robustFormProcess);
app.get("/contact-error", examples.contactError);
app.get("/thank-you", examples.thankYou);

// Simulando uma api
app.get("/api/tours", api.toursController);
app.put("/api/tours", api.toursController);
app.delete("/api/tours", api.toursController);
app.use(handlers.notFound);
app.use(handlers.serverError);
// Iniciando o servidor
require.main === module
  ? app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  : (module.exports = app);
