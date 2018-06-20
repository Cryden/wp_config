global.production = isProduction()

const path = require('path')
const merge = require('webpack-merge')
const _ = require('lodash')
let taskspath = path.resolve('webpack/tasks/')
const tasks = require('require-all')(taskspath)
let optionspath = path.resolve('webpack/options/')
const options = require('require-all')(optionspath)

let common = {
  entry: {
    index: './source/bootstrap.js'
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
  getTasks(),
  getOptions()
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

function getTasks () {
  let modules = {}
  for (const key in tasks) {
    if (tasks.hasOwnProperty(key)) {
      modules = _.assign(eval(tasks[key])())
    }
  }  
  return modules
}

function getOptions () {
  let modules = {}
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      modules = _.assign(eval(options[key])())
    }
  }  
  return modules
}