const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = function(dirs){
  return path.resolve(__dirname,dirs)
}
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler:true,
  configureWebpack:{
    devtool:"inline-source-map",
    resolve:{
      alias: {
        '@':resolve('src'),
        'vue$': 'vue/dist/vue.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    }
  }
})