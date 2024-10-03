"use strict";
const path = require("path");
const config = require("../config");
const vueLoaderConfig = require("./vue-loader.conf");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: ["./src/main.js"],
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
    },
    fallback: {
      // prevent webpack from injecting mocks to Node native modules
      // that does not make sense for the client
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client"),
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
        generator: {
          filename: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
        generator: {
          filename: "media/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
        generator: {
          filename: "fonts/[name].[hash:7].[ext]",
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
