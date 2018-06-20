const WebpackNotifierPlugin = require('webpack-notifier')
const path = require('path')

module.exports = notify => {
  return {
    plugins: [
      new WebpackNotifierPlugin({
        title: 'FROND',
        contentImage: path.resolve('webpack', 'logo.png'),
        alwaysNotify: true
      })
    ]
  }
}
