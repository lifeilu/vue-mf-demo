
module.exports = {
  loader: 'babel-loader',
  options: {
    presets: [
      ['@babel/preset-env', { targets: 'defaults',  loose: false }],
      '@vue/babel-preset-jsx',
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', { corejs: 3 }],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: false }],
      ['@babel/plugin-proposal-private-methods', { loose: false }],
    ],
  },
};

