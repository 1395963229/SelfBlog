const webpackConfig = require("./webpack.config")

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
}
