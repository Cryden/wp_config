/* global production */

const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

let cleanOptions = {
  root: path.resolve(),
  verbose: false,
}

module.exports = clean => {
  return {
    plugins: production ? [
      new CleanWebpackPlugin('dist', cleanOptions)
    ] : []
  }
}