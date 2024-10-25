const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/contacts', // Specify the path to match
    createProxyMiddleware({
      target: 'https://imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts',
      changeOrigin: true,
    })
  );
};
