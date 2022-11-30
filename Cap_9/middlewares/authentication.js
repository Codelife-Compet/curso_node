module.exports = (req, res, next) => {
  const username = req.session.username;
  if (!username) {
    return res.redirect(303, "/login");
  }
  res.locals.username = username;
  return next();
};
