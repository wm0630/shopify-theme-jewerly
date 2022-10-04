// Modify default webpack dev config using this file
const path = require('path');
      webpack = require('webpack');

      IS_DEVELOPMENT = process.env.NODE_ENV === 'dev';

      dirApp = path.join(__dirname, 'src/scripts/layout');
      dirAssets = path.join(__dirname, 'src/assets');
      dirStyles = path.join(__dirname, 'src/styles');
      dirNode = 'node_modules';

module.exports = {
  entry: [
    path.join(dirApp, 'theme.js'),
    path.join(dirStyles, 'theme.scss')
  ],

  resolve: {
    modules: [
      dirApp,
      dirAssets,
      dirNode,
      dirStyles
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: 'glslify-loader',
        exclude: /node_modules/
      }
    ]
  }
}