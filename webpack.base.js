const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
          cacheDirectory: true,
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              data: `
              @import "${path.resolve(__dirname, 'src/frontend/assets/styles/Variables.scss')}";
              @import "${path.resolve(__dirname, 'src/frontend/assets/styles/Mixins.scss')}";
              @import "${path.resolve(__dirname, 'src/frontend/assets/styles/Base.scss')}";
              `,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
};
