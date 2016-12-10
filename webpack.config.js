var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ngRedux Async',
      template: './index.html',
      inject: 'body'
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['angular-hmr', 'babel?presets[]=es2015'],
      exclude: /node_modules/,
    },
    {
      test: /\.html$/,
      loader: 'html'
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader?sourceMap", 'resolve-url-loader', "sass-loader?sourceMap"]
    }]
  }
};
