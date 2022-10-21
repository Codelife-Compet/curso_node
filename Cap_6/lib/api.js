const { tourController: tours } = require("../api/tours");
exports.getTours = (req, res) => {
  res.json(tours.getData());
};
