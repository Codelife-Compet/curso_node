const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  TourControllerUseCase,
} = require("./tours/useCases/tourControllerUseCase");
const { tourController } = require("./tours/controller/tourController");
const tourControllerUseCase = new TourControllerUseCase(tourController);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/api/tours", tourControllerUseCase.getTours);
app.post("/api/tours", tourControllerUseCase.postTours);

app.listen(4000, () => console.log("Api rodando em http://localhost:4000"));
