const { merge } = require('webpack-merge');
const Common = require("./webpack.common.js");
const path = require('path');

module.exports = merge(Common, {
  mode: "production",
  devtool: "source-map",
  watch: false,
  output: {
    publicPath: '/geostac/',
  },
});
