const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/v1/login',
        createProxyMiddleware({
            target: 'https://shortlink-bakcend.onrender.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/api/v1/register',
        createProxyMiddleware({
            target: 'https://shortlink-bakcend.onrender.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/api/v1/me',
        createProxyMiddleware({
            target: 'https://shortlink-bakcend.onrender.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/api/v1/logout',
        createProxyMiddleware({
            target: 'https://shortlink-bakcend.onrender.com',
            changeOrigin: true,
        })
    );
};
