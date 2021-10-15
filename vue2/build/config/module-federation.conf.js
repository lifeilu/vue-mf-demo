const { FinderWebClientModule, AssetMatrixModule } = require('./module-config.js');
const port = require('../../../port.js');

AssetMatrixModule.url = `http://localhost:${port.Vue3Port}`;

const moduleFederationConfig =  {
  name: FinderWebClientModule.name,
  filename: FinderWebClientModule.fileName,
  exposes: {
    // "./MessageContent": "./src/components/common/message.vue",
    // "./TransmitCenter": "./src/components/common/transmitCenter-v2.vue",
  },
  remotes: {},
}

moduleFederationConfig.remotes[AssetMatrixModule.name] = AssetMatrixModule.federationConfig;

module.exports = moduleFederationConfig;