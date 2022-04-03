// Sample of how to setup a proxy middleware with environment variables

//// file: <project_root>/src/setupProxy.js
import createProxyMiddleware from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:'+ process.env.PORT,
      changeOrigin: true,
    })
  );
};