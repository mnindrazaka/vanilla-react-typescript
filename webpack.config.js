const path = require("path");

module.exports = {
  entry: "./dist/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
};
