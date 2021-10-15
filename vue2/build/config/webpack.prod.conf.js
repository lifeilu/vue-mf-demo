const webpack = require('webpack');
const { merge } = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const utils = require('../utils/index.js');
const config = require('./index.js');
const webpackBaseConfig = require('./webpack.base.js');

const distFolder = config.distFolder ? `${config.distFolder}/` : '';
const assetsRoot = distFolder ? utils.dir(distFolder) : '';

const jsFilename = process.env.FILE_HASH === 'OPEN'
  ? (`${distFolder}js/[name].[chunkhash].js`)
  : (`${distFolder}js/[name].js`);

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  }),
];

// 当启用report选项时，输出额外的信息。包括chunk图以及过程信息
if (config.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  plugins.push(new BundleAnalyzerPlugin());
  plugins.push(new webpack.ProgressPlugin({ profile: true }));
  const FileListPlugin = require('../plugins/FileListPlugin.js');
  plugins.push(new FileListPlugin());
}

const minimizerPlugins = [ new CssMinimizerPlugin({
  warningsFilter: () => false,
})];

if (config.uglifyBundleFile) {
  minimizerPlugins.push(new UglifyJsPlugin({
    parallel: true,
    uglifyOptions: {
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      // 在UglifyJs删除没有用到的代码时不输出警告
      warnings: false,
      compress: {
        // 删除所有的 `console` 语句，可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      },
      // sourceMap: true,
    },
  }));
}

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: assetsRoot || config.assetsRoot,
    publicPath: config.assetsPublicPath,
    // filename: distFolder + "js/[name].[chunkhash].js"
    // filename: distFolder + "js/[name].js"
    filename: jsFilename,
  },
  plugins,
  externals: {
    mockjs: 'mockjs',
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      automaticNameDelimiter: '.',
      cacheGroups: { 
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        }
      }
    },
    minimizer: minimizerPlugins
  }
  // devtool: 'source-map',
});

module.exports = webpackConfig;
