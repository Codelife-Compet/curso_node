const { credentials } = require("./credentials");
const helpers = require("./helpers");
const { upload: uploadConfig } = require("./upload");
module.exports = {
  helpers,
  credentials,
  uploadConfig,
};
