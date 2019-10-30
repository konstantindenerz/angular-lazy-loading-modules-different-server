const fs = require('fs');

const mocks = MockBase => class ServerApi extends MockBase {
  mocks() {
    const mocks = [
      {
        route: '/',
        responses: [{
          response: ctx => {
            ctx.body = mocks.map(api => api.route);
          },
        }],
      },
      {
        route: '/modules',
        responses: [{
          response: ctx => {
            const now = Date.now();
            ctx.body = [
              { url: '/dashboard', name: 'Dashboard' },
              {
                url: '/module/reporting',
                name: 'Reporting',
                id: 'reporting',
                preload: true,
                selector: 'labs-reporting',
                files: [
                  `styles-es2015.js?v=${now}`,
                  `runtime-es2015.js?v=${now}`,
                  // `vendor-es2015.js?v=${now}`, // dev build only
                  `main-es2015.js?v=${now}`,
                ],
              },
              { url: '/settings', name: 'Settings' },
            ];
          },
        }],
      },
      {
        route: '/module/reporting*',
        responses: [{
          response: ctx => {
            if (ctx.request.url.indexOf('assets') === -1) {
              ctx.set('Content-Type', 'application/javascript');
            } else {
              ctx.set('Content-Type', 'image/svg+xml');
            }
            ctx.body = fs.createReadStream(`server${ctx.request.url.split('?')[0]}`);
          },
        }],
      },
    ];
    return mocks;
  }
};

module.exports = {
  port: 4201,
  logFormat: 'tiny',
  rewrite: [],
  mocks,
  stack: [
    'lws-body-parser',
    'lws-request-monitor',
    'lws-log',
    'lws-cors',
    'lws-json',
    'lws-mock-response',
    'lws-rewrite',
    'lws-blacklist',
    'lws-conditional-get',
    'lws-mime',
    'lws-compress',
    'lws-spa',
    'lws-static',
    'lws-index',
  ],
};
