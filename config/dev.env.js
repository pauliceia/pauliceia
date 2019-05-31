'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  urlVGI: '"http://www.pauliceia.dpi.inpe.br/api/vgi"',
  keyCripto: '"keytest"',
  urlGeoserver: '"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"',
  urlGeocoding: '"http://www.pauliceia.dpi.inpe.br/api/geocoding"'
})
