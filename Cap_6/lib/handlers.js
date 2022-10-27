const fortune = require("./fortune");
const codelifer = require("./codelifer");
exports.home = (_req, res) => {
  res.render("home");
};
exports.about = (_req, res) => {
  res.render("about");
};
exports.cookieSort = (_req, res) => {
  res.render("cookieSort", {
    fortune: fortune.getFortune(),
    codelifer: codelifer.getCodelifer(),
  });
};
exports.notFound = (_req, res) => {
  res.status(404);
  res.render("404", { message: "Achou nada" });
};
exports.serverError = (_err, _req, res, _next) => {
  console.error("** SERVER ERROR: " + _err.message);
  res.status(500).render("500", { message: "you shouldn't have clicked that" });
};

exports.thanks = (req, res) => {
  res.render("thank-you");
};

exports.text = (req, res) => {
  res.type("text/plain");
  res.send("this is a teste");
};

exports.customLayout = (req, res) =>
  res.render("custom-layout", { layout: "custom" });

exports.noLayout = (req, res) => res.render("no-layout", { layout: "null" });

exports.greeting = (req, res) => {
  if (req.cookie && !req.cookies.userId) {
    res.cookie("userId", "123");
  }
  if (req.session && !req.session.username) {
    req.session.username = "Francisco Abreu";
  }
  const message = "Olá estimado programador!";
  const style = req.query.style || "color:inherit";
  const userId = req.cookies.userId || "userId nao encontrado";
  const username = req.session.username || "Usuario nao encontrado";
  res.render("greeting", { message, style, userId, username });
};

exports.contactError = (req, res) => {
  res.render("contact-error");
};

// Basic Form

exports.basicFormProcess = (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  console.log(` Nome de usuário :${username}, email : ${email}`);
  res.redirect(303, "/thank-you");
};

exports.basicForm = (req, res) => {
  res.render("basicForm");
};

// Robust Form

exports.robustFormProcess = (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  try {
    // here's where we would try to save contact to database or other
    // persistence mechanism...for now, we'll just simulate an error
    if (req.body.simulateError) throw new Error("Error saving contact!");
    console.log(`contact from ${username} <${email}>`);
    res.format({
      "text/html": () => res.redirect(303, "/thank-you"),
      "application/json": () => res.json({ success: true }),
    });
  } catch (err) {
    // here's where we would handle any persistence failures
    console.error(`error processing contact from ${username} + <${email}>`);
    res.format({
      "text/html": () => res.redirect(303, "/contact-error"),
      "application/json": () =>
        res.status(500).json({
          error: "error saving contact information",
        }),
    });
  }
};

exports.robustForm = (req, res) => {
  res.render("robustForm");
};
