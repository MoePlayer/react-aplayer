'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/react-aplayer.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-aplayer.min.js',
    libraryTarget: 'umd'
  },
  externals: ['react', 'prop-types', 'aplayer'],
  module: {
    rules: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    })]
};
