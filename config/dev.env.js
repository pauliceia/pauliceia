'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  urlVGI: '"http://localhost:8888"',
  keyCripto: '"keytest"',
  urlGeoserver: '"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"',
  urlGeocoding: '"http://www.pauliceia.dpi.inpe.br/api/geocoding"'
})
