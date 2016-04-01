'use strict';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './app/index.js',
  output: {
    path: './build',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        cacheDirectory: true,
        presets: ['es2015']
      }
    }, {
      test: /\.handlebars$/,
      loader: 'handlebars'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/templates/index.handlebars',
      chunks: ['index_bundle.js']
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

module.exports = config;
