const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('Proxy setup initialized');
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://integrated-management-software-9bl5.vercel.app/',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log(`Proxying request to: ${proxyReq.getHeader('host')}`);
      }
    })
  );
};