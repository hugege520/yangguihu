const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75
})
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': { // 只处理/api开头路径的请求
        target: 'http://localhost:3002', // 转发的目标地址
        changeOrigin: true, // 支持跨域
         pathRewrite: {
          '^/api': ''
        } 
      },
      '/mock': { // 只处理/mock开头路径的请求
        target: 'https://m.you.163.com', // 转发的目标地址
        changeOrigin: true, // 支持跨域
         pathRewrite: {
          '^/mock': ''
        } 
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },

}