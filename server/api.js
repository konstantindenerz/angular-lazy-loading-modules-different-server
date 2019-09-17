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
            ctx.body = [
              { url: '/dashboard', name: 'Dashboard' },
              { url: '/reporting', name: 'Reporting' },
              {
                url: '/module/admin',
                name: 'Administration',
                id: 'admin',
                preload: true,
                selector: 'labs-admin',
                files: [
                  'styles-es2015.js',
                  'runtime-es2015.js',
                  // 'vendor-es2015.js', dev build only
                  'main-es2015.js',
                ],
              },
            ];
          },
        }],
      },
      {
        route: '/module/admin*',
        responses: [{
          response: ctx => {
            ctx.set('Content-Type', 'application/javascript');
            ctx.body = fs.createReadStream(`server${ctx.request.url}`);
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
