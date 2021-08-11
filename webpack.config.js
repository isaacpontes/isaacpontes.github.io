const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/main.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },

  mode: 'development',

  watch: true,

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    liveReload: true
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}
