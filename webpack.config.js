const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./scripts/webpack/webpack.${env}`)(env);
const presetConfig = require('./scripts/webpack/loadPresets');

module.exports = ({ mode = 'production', presets = [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.lit$/,
            loader: 'lit-loader'
          }
        ]
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
