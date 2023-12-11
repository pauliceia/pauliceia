'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  urlVGI: '"http://www.pauliceia.unifesp.br/api/vgi"',
  urlGeoserverPauliceia: '"http://www.pauliceia.unifesp.br/geoserver/pauliceia"',
  urlGeoserveOther: '"http://www.pauliceia.unifesp.br/geoserver/other"',
  urlGeocoding: '"http://www.pauliceia.unifesp.br/api/geocoding"',
  keyCripto: '"keytest"'
})

// urlGeoserverPauliceia: '"http://localhost:9021/geoserver/pauliceia"',
// urlVGI: '"http://localhost:3001"',