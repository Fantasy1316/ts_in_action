const { merge } = require('webpack-merge')
const baseconfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proCongfig = require('./webpack.pro.config')

let config = process.NODE_ENV === 'development' ? devConfig : proCongfig

module.exports = merge(baseconfig, config)
