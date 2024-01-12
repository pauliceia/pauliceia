'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // urlVGI: '"http://localhost:3001"',
  urlVGI: '"http://www.pauliceia.dpi.inpe.br/api/vgi"',
  // urlGeoserverPauliceia: '"http://localhost:9021/geoserver/pauliceia"',
  urlGeoserverPauliceia: '"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"',
  urlGeoserveOther: '"http://www.pauliceia.dpi.inpe.br/geoserver/other"',
  urlGeocoding: '"http://www.pauliceia.dpi.inpe.br/api/geocoding"',
  keyCripto: '"keytest"'
})
