const merge = require('webpack-merge');
const common = require('./webpack.common.js');
require("babel-register");
const path = require('path');


module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, "dist"),
    filename: 'app.js',
},
});