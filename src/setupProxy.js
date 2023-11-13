// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api', // 要代理的路径
//     createProxyMiddleware({
//       target: 'http://web.juhe.cn', // 目标API的地址
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '/finance/exchange/rmbquot?type=0&bank=3&key=21d1afa89475cfed5d9cc42e069930b6',
//       },
//     })
//   );
// };
