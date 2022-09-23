/* eslint-disable n/handle-callback-err */
const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
});
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
const fortunes = [
  "Crie uma nova página do zero",
  "Edite uma parte do código e teste",
  "Crie um arquivo CSS",
  "Vincule um arquivo CSS ao projeto, se não existir crie um",
  "Adicione uma nova tarefa para o projeto",
  "Escolha alguém para explicar uma parte do código",
  "Explique uma parte do código",
];
const codelifers = ["Henrique", "Richard", "Natália", "Lucas", "Francisco"];
app.use(express.static(__dirname.join("/public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.set("views", __dirname.join("/views"));

app.get("/fortunes", (req, res) => {
  const codelifer = codelifers[Math.floor(Math.random() * codelifers.length)];
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render("cookieSort", { codelifer, fortune });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render("500");
});
app.use((err, req, res, next) => {
  res.status(404);
  res.render("404");
});

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port} !`)
);
