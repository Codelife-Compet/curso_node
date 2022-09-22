const express = require ("express");
const expressHandlebars = require('express-handlebars');
const fortune = require ("./lib/fortune");
const codelifer = require ("./lib/codelifer");
const app = express();
const port = process.env.PORT || 3333;
const engineHandlebars = expressHandlebars
.engine(
  {
    defaultLayout:"main"
  }
);
app.set("view engine","handlebars");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname+"/views");
app.get("/", (req, res) => {
  res.render("home");
})
app.get("/about", (req, res) => {
  res.render("about");
})
app.get("/fortunes", (req, res) => {
  res.render("cookieSort",{
    codelifer:codelifer.getCodelifer(),
    fortune:fortune.getFortune()
  });
})
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('500');
});
app.use((err, req, res, next) => {
  res.status(404);
  res.render('404');
});
app.listen(port, () => console.log(`Example app listening on http://localhost:${port} !`));