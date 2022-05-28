const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/igi/v2/security/login',
        {
            target: 'https://svg-app.qriarlabs.demo:9343',
            changeOrigin: true
        })
    )
}