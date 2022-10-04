// Modify default webpack production config using this file
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin()  
  ]
}
