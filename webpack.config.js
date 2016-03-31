const path = require("path");
const webpack = require("webpack");
const inputPath = "./entry/";
const reactPath = "./entry/component/";

module.exports = {
  context: __dirname,
  entry: {
    index: inputPath + 'index.js',
    cipher: "./js/cipher.js",
    
  },
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: '[name]-bundle.js'
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.css$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }

    ]
  }
};