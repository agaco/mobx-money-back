const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, "dist"),
    filename: 'app.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist/"),
    compress: true,
    port: 9000,
    hot: true,
    index: 'index.html',
    open: true,
    openPage: 'dist/index.html'
  },
});
