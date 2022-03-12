//@ts-ignore
const proxy = require('http-proxy-middleware')


module.exports = function(app: any) {
  app.use(
    proxy('/api', {  //api是需要转发的请求
      target: 'http://152.136.185.210:4000', //配置转发目标地址(能返回数据的服务器地址),如果是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值,这个参数可以让target参数是域名
      /*
        changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
        changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
        changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置),比如访问的API路径：/api/users,设
    }),
  )
}
