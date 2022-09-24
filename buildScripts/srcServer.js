const express = require("express");
const path = require("path");
const open = require("open");
const webpack = require("webpack");
const config = require("../webpack.config.dev");
let port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    open("http://localhost:" + port);
  }
});
