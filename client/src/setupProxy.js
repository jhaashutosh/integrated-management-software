const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('Proxy setup initialized');
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5001',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log(`Proxying request to: ${proxyReq.getHeader('host')}`);
      }
    })
  );
};