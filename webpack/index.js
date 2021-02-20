const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    home: ['./src/js/home.js', './src/scss/home.scss'],
    common: ['./src/js/common.js', './src/scss/common.scss'],
  },
  output: {
    path: path.resolve('./build'),
    filename: 'js/[name].js',
    chunkFilename: './js/vendor.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/home.pug',
      filename: 'views/home.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
    ],
  },
};
