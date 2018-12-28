const path = require('path');
require("babel-register");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: { main: './src/js/index.jsx' },
    watch: true, 
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 20000,
                name: 'img/[name].[ext]',
              },
            },
          },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          }
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    
      plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
          }),
        new webpack.HotModuleReplacementPlugin()
       ],
}
