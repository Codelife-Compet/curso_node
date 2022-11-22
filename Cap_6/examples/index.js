const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const examples = require("./lib/examples");
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
});
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../../views"));
app.use(express.static(path.join(__dirname, "../../public")));

// Configuração do body-parser para o processamento do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

// exemplos do capítulo 6

app.get("/echoHeaders", examples.echoHeaders);
app.get("/greeting", examples.viewWithContent);
app.get("/noLayout", examples.noLayout);
app.get("/customLayout", examples.customLayout);
app.get("/basicForm", examples.basicForm);
app.post("/basicForm/process", examples.basicFormProcess);
app.get("/robustForm", examples.robustForm);
app.post("/robustForm/process", examples.robustFormProcess);
app.get("/contact-error", examples.contactError);
app.get("/thank-you", examples.thankYou);

app.listen(3000, () => console.log("app rodando em http://localhost:3000"));
