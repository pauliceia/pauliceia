'use strict'

module.exports = () => ({
  terserOptions: {
    compress: {
      // turn off flags with small gains to speed up minification
      arrows: false,
      collapse_vars: false,
      comparisons: false,
      computed_props: false,
      hoist_funs: false,
      hoist_props: false,
      hoist_vars: false,
      inline: false,
      loops: false,
      negate_iife: false,
      properties: false,
      reduce_funcs: false,
      reduce_vars: false,
      switches: false,
      toplevel: false,
      typeofs: false,

      // a few flags with noticable gains/speed ratio
      // numbers based on out of the box vendor bundle
      booleans: true,
      if_return: true,
      sequences: true,
      unused: true,

      // Required features to drop conditional branches
      conditionals: true,
      dead_code: true,
      evaluate: true,
    },
    mangle: {
      safari10: true,
    },
  },
  extractComments: false,
})
