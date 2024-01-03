'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // urlVGI: '"http://localhost:3001"',
  urlVGI: '"http://localhost:8888"',
  // urlGeoserverPauliceia: '"http://localhost:9021/geoserver/pauliceia"',
  urlGeoserverPauliceia: '"https://pauliceia.unifesp.brgeoserver/pauliceia"',
  urlGeoserveOther: '"https://pauliceia.unifesp.br/geoserver/other"',
  urlGeocoding: '"https://pauliceia.unifesp.br/api/geocoding"',
  keyCripto: '"keytest"'
})
