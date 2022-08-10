const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    watchOptions: {
      poll: true
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};