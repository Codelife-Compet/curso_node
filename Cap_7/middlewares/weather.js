const { getWeatherData } = require("../utils/weatherData");
const weatherMiddleware = async (req, res, next) => {
  if (!res.locals.partials) {
    res.locals.partials = {};
  }
  res.locals.partials.weatherContext = await getWeatherData();
  next();
};
module.exports = weatherMiddleware;
