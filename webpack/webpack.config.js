global.production = isProduction()

const path = require('path')
const merge = require('webpack-merge')
const _ = require('lodash')
let taskspath = path.resolve('webpack/tasks/')
const tasks = require('require-all')(taskspath)
let optionspath = path.resolve('webpack/options/')
const options = require('require-all')(optionspath)

let common = {
  context: path.resolve('source'),
  entry: {
    index: ['./js/index.js',
    './css/styles.css',
    './sass/styles.sass']
  },
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].[hash].js'
  },
  plugins: [
  ]
}

module.exports = merge([
  common,
  getSource(tasks),
  getSource(options)
])

function isProduction () {
  let myArgs = process.argv
  for (let index = 0; index < myArgs.length; index++) {
    const element = myArgs[index]
    if (element === 'production') {
      return true
    }
  }
  return false
}

function getSource(data) {
  let modules = {}
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      modules = _.mergeWith(eval(data[key])(), modules, customizer)
    }
  }  
  return modules

  function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }
}

