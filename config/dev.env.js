'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  urlVGI: '"http://localhost:8888"',
  // urlVGI: '"http://www.pauliceia.dpi.inpe.br/api/vgi"',
  urlGeoserverPauliceia: '"http://localhost:8085/geoserver/pauliceia"',
  // urlGeoserverPauliceia: '"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"',
  urlGeoserveOther: '"http://www.pauliceia.dpi.inpe.br/geoserver/other"',
  urlGeocoding: '"http://localhost:8888"',
  keyCripto: '"keytest"'
})
