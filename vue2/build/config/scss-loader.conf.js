const utils = require('../utils/index.js');

module.exports = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      indentedSyntax: false,
      indentWidth: 4,
      includePaths: [
        utils.dir('style'),
        utils.dir('style', 'mofang'),
        utils.dir('style', 'mofang-bc'),
        utils.dir('style', 'themes'),
        utils.dir('assets', 'vendors'),
      ],
    },
  },
};
