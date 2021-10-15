
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const config = require('./index.js');
const scssLoader = require('./scss-loader.conf.js');
const babelLoaderConfig = require('./babel-loader.conf.js');

let loaders;

const plugins = [];

if (config.isProduction) {
  plugins.push(new MiniCssExtractPlugin({
    // filename: 'style/[name].[contenthash].css',
    filename: process.env.FILE_HASH === 'OPEN'
      ? 'style/[name].[contenthash].css'
      : 'style/[name].css',
    // allChunks: false,
    ignoreOrder: true,
  }));


  loaders = {
    js: [
      { loader: 'cache-loader' },
      babelLoaderConfig,
    ],
    postcss: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { importLoaders: 1 },
      },
      {
        loader: 'postcss-loader',
      },
    ],
    css: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      scssLoader,
    ],
    scss: [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader' },
      'postcss-loader',
      scssLoader,
    ],
  };
} else {
  // test & development use the same conf
  loaders = {
    js: [
      { loader: 'cache-loader' },
      babelLoaderConfig,
    ],
    css: [
      'vue-style-loader',
      'css-loader',
      scssLoader,
    ],
    postcss: [
      'vue-style-loader',
      {
        loader: 'css-loader',
        options: { importLoaders: 1 },
      },
    ],
    scss: [
      'vue-style-loader',
      'css-loader',
      scssLoader,
    ],
  };
}

module.exports = {
  loaders,
  plugins,
};
