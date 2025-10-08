'use strict'

const path = require('node:path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.mjs',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/',
  },
  devServer: {
    static: path.resolve(__dirname),
    port: 8080,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, //
          { loader: 'css-loader' }, // Interprets `@import` and `url()` like `import/require()` and will resolve them
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [autoprefixer] }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings.
                silenceDeprecations: [
                  'color-functions',
                  'global-builtin',
                  'import'
                ]
              }
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: "warning",
    maxAssetSize: 512 * 1024, // 512 KiB
    maxEntrypointSize: 768 * 1024, // 768 KiB
  },
}