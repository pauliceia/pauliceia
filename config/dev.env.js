'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // urlVGI: '"http://localhost:3001"',
  urlVGI: '"https://pauliceia.unifesp.br/api/vgi"',
  // urlGeoserverPauliceia: '"http://localhost:9021/geoserver/pauliceia"',
  urlGeoserverPauliceia: '"https://pauliceia.unifesp.br/geoserver/pauliceia"',
  urlGeoserveOther: '"https://pauliceia.unifesp.br/geoserver/other"',
  urlGeocoding: '"https://pauliceia.unifesp.br/api/geocoding"',
  keyCripto: '"keytest"'
})