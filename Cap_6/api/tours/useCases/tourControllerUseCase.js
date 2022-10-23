const { tourController } = require("../controller/tourController");

class TourControllerUseCase {
  tourController;
  constructor(tourController) {
    this.tourController = tourController;
  }

  getTours = (req, res) => {
    res.json(this.tourController.getData());
  };

  postTours = (req, res) => {
    const tour = req.body.tour;
    try {
      this.tourController.postData({
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
}
exports.TourControllerUseCase = TourControllerUseCase;
