const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

const config = require('../config/index.js');
const utils = require('../utils/index.js');
const vueLoaderConfig = require('../config/vue-loader.conf');
const postcssConfig = require('./postcss-loader.js');
const scssLoader = require('./scss-loader.conf.js');
const babelLoaderConfig = require('./babel-loader.conf.js');
const moduleFederationConfig = require('./module-federation.conf.js');

// set process.noDeprecation = true , the Deprecation warning will be removed
// the deprecation warning isn"t an issue application developers have to worry about
// this is for webpack-loader developers.
process.noDeprecation = true;

// use utils.isProduction instead.
// const isProd = process.env.NODE_ENV === "production"
const plugins = vueLoaderConfig.plugins.concat([]);
plugins.push(new HtmlWebpackPlugin({
  template: './public/index.html',
  title: 'Test Vue2',
}),)
plugins.push(new ModuleFederationPlugin(moduleFederationConfig));

module.exports = {
  context: utils.dir('root'),
  entry: ['./src/index.js'],
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    //   filename: "[name].[chunkhash].js"
  },
  resolve: {
    alias: {
      '~': utils.dir('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          self: false,
          globals: ['utils', 'require', 'url'],
          root: utils.dir('src'),
        },
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //   },
      //   include: [utils.dir('src'), utils.dir('test')],
      //   exclude: [/config[/\\]index.js$/i, /utils[\\/]gif.*\.js/i, /[/\\]node_modules[/\\]WebClientCommon[/\\]/],
      //   // exclude: /node_modules/,
      // },
      {
        test: /\.(js|jsx)$/,
        include: [utils.dir('src')],
        exclude: /node_modules/,
        use: babelLoaderConfig,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: config.isDevelopment ? 100 : 10000,
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: config.isDevelopment ? 100 : 10000,
          name: 'media/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.css$/i,
        use: [
          config.isDevelopment ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'postcss-loader', options: { postcssOptions: postcssConfig } },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          config.isDevelopment ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'postcss-loader', options: { postcssOptions: postcssConfig } },
          scssLoader,
        ],
      },
      {
        test: /\.(woff2?)(\?.*)?$/,
        loader: 'url-loader',
        include: [utils.dir('src')],
        options: {
          limit: config.isDevelopment ? 100 : 1024 * 10,
          mimetype: 'application/font-woff',
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [utils.dir('src')],
        exclude: [utils.dir('src/assets/imgs')],
        options: {
          limit: config.isDevelopment ? 100 : 1024 * 10,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins,
};
