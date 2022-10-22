const { tourController } = require("../api/tours");
exports.getTours = (req, res) => {
  res.json(tourController.getData());
};
exports.postTours = (req, res) => {
  const tour = req.body.tour;
  try {
    tourController.postData({
      id: tour.id,
      name: tour.name,
      price: tour.price,
    });
    res.status(201);
    res.json({ success: true, createdTour: tour });
  } catch (error) {
    console.error(error);
    res.status(403);
    res.json({ code: 403, error });
  }
};
