const miniCssExctractorPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: 'prod.[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExctractorPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new miniCssExctractorPlugin()]
});
