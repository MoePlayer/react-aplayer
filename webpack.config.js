'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/react-aplayer.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-aplayer.min.js', //todo output not min
    libraryTarget: 'umd'
  },
  externals: ['react', 'prop-types', 'aplayer'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
        comparisons: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]
};
