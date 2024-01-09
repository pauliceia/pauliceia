"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // urlVGI: '"http://localhost:3001"',
  urlVGI: '"http://localhost:8888"',
  // urlGeoserverPauliceia: '"http://localhost:9021/geoserver/pauliceia"',
  urlGeoserverPauliceia: '"http://localhost:8001/geoserver/pauliceia"',
  urlGeoserveOther: '"http://localhost:8001/geoserver/other"',
  urlGeocoding: '"http://localhost:3000/api/geocoding"',
  keyCripto: '"keytest"'
});
