const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const helpers = require("./helpers");
const handlers = require("./lib/handlers");
const weatherMiddleware = require("./middlewares/weather");
const app = express();
const engineHandlebars = expressHandlebars.engine({
  defaultLayout: "main",
  helpers: { ...helpers },
});
const port = process.env.PORT || 4444;
app.engine("handlebars", engineHandlebars);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(weatherMiddleware);
app.get("/", handlers.sectionTest);
require.main === module
  ? app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  : (module.exports = app);
