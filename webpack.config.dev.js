const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: [path.resolve(__dirname, "src/index")],
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
