const { notFound } = require("./notFound");
const { weather } = require("./weather");
const { serverError } = require("./serverError");
const authentication = require("./authentication");
const flash = require("./flash");
module.exports = {
  notFound,
  weather,
  serverError,
  flash,
  authentication,
};
