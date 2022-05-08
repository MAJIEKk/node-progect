const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer:{
    static:{
      directory: path.join(__dirname, "public")
    },
    compress: true,
    port: 1111,
  },
  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]},
    plugins: [new HtmlWebpackPlugin({
      template: 'src/index.html'
    })],
};
