const path = require('path')

module.exports = devserver => {
  return {
    devServer: {
      contentBase: path.resolve('dist'),
      compress: true,
      port: 9000
    }
  }
}
