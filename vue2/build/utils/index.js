/**
 * Build asset utils.
 */
const path = require('path');

const directoryMap = {
  assets: path.join(__dirname, '..', '..', 'src', 'assets'),
  dist: path.join(__dirname, '..', '..', 'dist'),
  pages: path.join(__dirname, '..', '..', 'src', 'pages'),
  root: path.join(__dirname, '..', '..'),
  static: path.join(__dirname, '..', '..', 'static'),
  src: path.join(__dirname, '..', '..', 'src'),
  style: path.join(__dirname, '..', '..', 'src', 'styles'),
};

const dir = function (base, ...dirs) {
  let baseDir = '';
  if (base in directoryMap) {
    baseDir = directoryMap[base];
    return path.join(baseDir, ...dirs);
  }

  return path.join(directoryMap.root, base, ...dirs);
};

module.exports = {
  dir,
};
