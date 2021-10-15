const webpack = require('webpack');
const { merge } = require('webpack-merge');

const config = require('../config/index.js');
const webpackBaseConfig = require('./webpack.base.js');

const plugins = [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()];

module.exports = merge(
  webpackBaseConfig,
  {
    mode: 'development',
    output:
    {
      filename: '[name].js',
      // path: config.assetsRoot,
      // publicPath: config.assetsPublicPath,
    },
    devtool: 'inline-source-map',
    devServer: {
      port: config.development.port,
    },
    plugins,
  },
);
