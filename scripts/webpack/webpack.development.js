module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: 'dev.[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
});
