const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,  //关闭语法检查
  pages: {
    index: {
      entry: 'src\main.js',
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    },
  },
  //代理
  devServer: {
    proxy: {
      '/api1': {													// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',	// 代理目标的基础路径
        pathRewrite: { '^/api1': '' },				// 代理往后端服务器的请求去掉 /api1 前缀
        ws: true,													// WebSocket
        changeOrigin: true,

      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/api2': '' },
        changeOrigin: true
      }
    }
  }
  /*
     changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
     changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
     changeOrigin默认值为true
  */

})

