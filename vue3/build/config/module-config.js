const moduleFileName = 'remoteEntry.js';

// FinderWebClient module
const FinderWebClientModule = {
  fileName: moduleFileName,
  name: 'Finder',
};

// GatewayClient module
const GatewayClientModule = {
  fileName: moduleFileName,
  name: 'Gateway',
  baseUrl: '',
  set url(value) {
    this.baseUrl = value;
  },
  get url() {
    return this.baseUrl;
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}`;
  },
};

const AssetMatrixModule = {
  fileName: moduleFileName,
  name: 'AssetMatrix',
  baseUrl: '',
  set url(value) {
    this.baseUrl = value;
  },
  get url() {
    return this.baseUrl;
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}`;
  },
};

module.exports = {
  FinderWebClientModule,
  GatewayClientModule,
  AssetMatrixModule,
};
