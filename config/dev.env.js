'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  urlVGI: '"http://www.pauliceia.dpi.inpe.br/api/vgi"',
  urlGeoserverPauliceia: '"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"',
  urlGeoserveOther: '"http://www.pauliceia.dpi.inpe.br/geoserver/other"',
  urlGeocoding: '"http://www.pauliceia.dpi.inpe.br/api/geocoding"',
  // urlGeocoding: '"http://127.0.0.1:8000/geocoding"',
  keyCripto: '"keytest"'
})
