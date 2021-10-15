
const KB = 1024;
const MB = 1024 * 1024;

class FileListPlugin {
  toSizeStr(size) {
    if(size > MB) {
      return `${(size / MB).toFixed(3)} MB`;
    } else {
      return `${(size / KB).toFixed(3)} KB`;
    }
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      let filelist = 'In this build:\n\n'

      for (let filename in compilation.assets) {
        filelist += '- ' + filename +' (' + this.toSizeStr(compilation.assets[filename].size()) + ')\n'
      }

      compilation.assets['filelist.md'] = {
        source: function() {
          return filelist
        },
        size: function() {
          return filelist.length
        }
      }

      callback()
    });
  }
}

module.exports = FileListPlugin;