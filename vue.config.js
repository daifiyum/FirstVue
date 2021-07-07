module.exports = {
  publicPath: './',

  devServer: {  //接口跨域
    proxy: {
      '/api': {
        target: 'http://www.hnzsb.cn',
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  outputDir: './dist'
}

