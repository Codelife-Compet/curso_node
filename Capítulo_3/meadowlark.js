const express = require("express");
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

// configure Handlebars view engine
const engineHandlebars = expressHandlebars.engine({
    defaultLayout:'main'
})

app.engine('handlebars', engineHandlebars);
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + "/views")

// Pages renders

app.get("/", (req, res) => res.render('home'));

app.get("/about", (req, res) => res.render('about'));

// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('500');
});

app.listen(port, () =>
  console.log(
    `Express started on http://localhost:${port}; ` +
      `press Ctrl-C to terminate.`
  )
);

