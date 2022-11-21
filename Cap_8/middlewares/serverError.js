exports.serverError = (_err, _req, res, _next) => {
  res.status(500);
  res.render("500");
};
