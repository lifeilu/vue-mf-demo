const process = require('process');
const utils = require('../utils/index.js');
const port = require('../../../port.js');

module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development' || !('NODE_ENV' in process.env),
  assetsRoot: utils.dir('dist'),
  assetsPublicPath: '/',
  assetHubName: '',
  development: {
    port: port.Vue2Port,
    cssSourceMap: false,
  },
  test: {},
};
