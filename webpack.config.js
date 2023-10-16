'use strict';

const path = require('path');

module.exports = {
  entry: './src/ReactAplayer.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-aplayer.min.js',
    sourceMapFilename: 'react-aplayer.min.js.map'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  }
};
