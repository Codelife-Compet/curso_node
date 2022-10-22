const { tourController } = require("../api/tours");
exports.getTours = (req, res) => {
  res.json(tourController.getData());
};
