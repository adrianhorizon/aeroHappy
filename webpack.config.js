const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

dotenv.config();

const isProd = (process.env.NODE_ENV === 'production');

const config = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: {
    main: [
      '@babel/polyfill',
      './src/frontend/index.js',
    ],
  },
  mode: process.env.NODE_ENV,
  output: {
    path: isProd ?
      path.join(process.cwd(), './src/server/public') : '/',
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    minimizer: isProd ? [
      new TerserPlugin(),
    ] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(chunks => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'assets/app-[hash].css' : 'assets/app.css',
    }),
    isProd ? new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }) : () => { },
    isProd ? new ManifestPlugin() : () => { },
  ],
};

module.exports = merge(baseConfig, config);
