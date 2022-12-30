const path = require("path");

module.exports = {
  target: "node",
  entry: "./dist-js/server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};
