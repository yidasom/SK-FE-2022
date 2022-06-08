const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: 'js/main.js',
  },
  devServer: {
    static: ['dist'],
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
