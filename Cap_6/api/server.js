const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const api = require("./tour/useCase/tourControllerUseCase");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/api/tours", api.getTours);
app.post("/api/tours", api.postTours);

app.listen(4000, () => console.log("Api rodando em http://localhost:4000"));
