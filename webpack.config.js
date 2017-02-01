const path = require('path');
const webpack = require('webpack');

const javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
const htmlEntryPath = path.resolve(__dirname, 'src', 'index.html');
const buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', 
    javascriptEntryPath,
    htmlEntryPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel?presets[]=react,presets[]=es2015'],
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    } ,{
      test: /\.(jpg|png)$/,
      loader: 'file-loader?name=[path][name].[ext]',
  }],
  },
  plugins: [ 
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
