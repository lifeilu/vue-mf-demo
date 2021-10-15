const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');
const open = require('open'); 
const chalk = require('chalk'); 
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const port = require('../../port.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  cache: {
    type: 'filesystem',
  },
  devServer: {
    port: port.Vue3Port,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    host: '0.0.0.0',
    client: {
      overlay: false,
    },
    devMiddleware: {
      stats: 'errors-only',
    },
    compress: true, // 为每个静态文件开启 gzip compression
    onAfterSetupMiddleware: function () {
      open(`http://localhost:${this.port}`)
        .then(() => {
          console.log(chalk.cyan(`成功打开链接： http://localhost:${this.port}`));
        })
        .catch((err) => {
          console.log(chalk.red(err));
        });
    },
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|cur)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
  mode: 'development',
});
