const path = require('path')

module.exports = devServer => {
  return {
    devServer: {
      contentBase: path.resolve('dist'),
      compress: true,
      port: 9000
    }
  }
}
