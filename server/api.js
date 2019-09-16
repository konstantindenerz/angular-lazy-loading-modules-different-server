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
              { url: '/admin', name: 'Administration' },
            ];
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
