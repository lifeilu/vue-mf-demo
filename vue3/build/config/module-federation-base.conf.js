const path = require('path');
const packagePath = path.join(path.resolve('./'), 'package.json');
const { dependencies } = require(packagePath);

const { AssetMatrixModule } = require('./module-config.js');

const moduleFederationConfig =  {
  name: AssetMatrixModule.name,
  filename: AssetMatrixModule.fileName,
  exposes: {
    './Main': './src/pages/main.vue',
  },
  remotes: {},
};

module.exports = moduleFederationConfig;
