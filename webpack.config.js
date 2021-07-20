
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'react.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'bundle'),
    open: true,
    hot: true,
    port: 9000,
    clientLogLevel: 'error'
  },
  optimization: {
    usedExports: true
  },
  stats: 'errors-warnings',
  resolve: { extensions: [ '*', '.js', '.jsx', '.tsx', '.scss', '.svg', '.png' ] },

  module: {
    rules: [
      {
        test: /\.ts|\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              // modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.svg|.png/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'react app'
    }),
    new ESLintPlugin({
      extensions: [ 'js', 'jsx', 'tsx' ]
    })
  ]
};
