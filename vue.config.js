const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  outputDir: 'dist',
  assetsDir: 'assets',
  //lintOnSave: true,
  transpileDependencies: true,
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,

  devServer: {
    // host: 'localhost',
    port: 9999,
    https: false,
    hot: false,
    compress: true
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/scss/app.scss')]
    }
  }
})
