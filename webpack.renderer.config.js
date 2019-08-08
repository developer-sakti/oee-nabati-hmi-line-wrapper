const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({ test: /\.jpg$/, use: [ "file-loader" ] });
rules.push({ test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] });

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
