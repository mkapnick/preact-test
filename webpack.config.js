const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  entry: {
    user: '/Users/kapnickm/dev/preact-test/client/App.jsx',
  },
  output: {
    path: '/Users/kapnickm/dev/preact-test/public-gen/js',
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {
        comments: false,
      }
    }),
  ]
};
