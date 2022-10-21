const { Tour } = require("./model/tour");

const data = [
  new Tour({ id: 121, name: "Hood River", price: 122.9 }),
  new Tour({ id: 122, name: "Gregon Coast", price: 129.9 }),
];
exports.tourController = {
  getData: () => data,
};
