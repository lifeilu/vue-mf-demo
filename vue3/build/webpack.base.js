const webpack = require('webpack');
const path = require('path');
// vue-loader 插件, 需配合 @vue/compiler-sfc 一块使用
const { VueLoaderPlugin } = require('vue-loader/dist/index');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const moduleFederationConfig = require('./config/module-federation-base.conf.js');

module.exports = {
  entry: ['./src/index.ts'],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      /* {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, '../tsconfig.json'),
              // 对应文件添加个.ts或.tsx后缀
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true, // 关闭类型检查，即只进行转译
            },
          },
        ],
      }, */
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Test Vue3',
    }),
    // fork-ts-checker-webpack-plugin，顾名思义就是创建一个新进程，专门来运行Typescript类型检查。这么做的原因是为了利用多核资源来提升编译的速度
    new ForkTsCheckerWebpackPlugin(),
    new ModuleFederationPlugin(moduleFederationConfig),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
  },
};

