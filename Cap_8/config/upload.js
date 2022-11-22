const multer = require("multer");
const { resolve } = require("path");
const upload = (folder) => {
  return {
    storage: multer.diskStorage({
      destination: resolve(__dirname, "..", "..", folder),
      filename: (req, file, callback) => {
        const time = new Date().getTime();
        const filename = `${time}-${file.originalname}`;
        return callback(null, filename);
      },
    }),
  };
};
exports.upload = upload;
