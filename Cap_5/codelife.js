const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const handlers = require("./lib/handlers");
const port = process.env.port || 3333;
const engineHandlebars = expressHandlebars.engine({
  defaultLayout:"main"
});
app.engine('handlebars', engineHandlebars);
app.set("view engine","handlebars");
app.set("views", __dirname + "/views");
app.use(express.static( __dirname + "/public"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get("/",handlers.home);
app.get("/about",handlers.about);
app.get("/cookieSort",handlers.cookieSort);
