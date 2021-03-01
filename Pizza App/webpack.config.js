const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
